const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();

// --- 1. MIDDLEWARE ---
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://travels-frontend.onrender.com",
    "https://travels-2-czoy.onrender.com"
  ]
}));
app.use(express.json()); 

// --- 2. DATABASE CONNECTION ---
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://travels_db:25072000Ajay@cluster0.7as2grm.mongodb.net/travels_db?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 8000, 
  connectTimeoutMS: 15000,
  family: 4 
})
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// --- 3. SCHEMAS & MODELS ---
const Booking = mongoose.model('Booking', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  location: { type: String, required: true },
  bookingDate: { type: Date, default: Date.now }
}));

const Destination = mongoose.model('Destination', new mongoose.Schema({
  name: String,
  state: String,
  rating: Number,
  img: String
}));

const Review = mongoose.model('Review', new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: 'Explorer' },
  stars: { type: Number, required: true, min: 1, max: 5 },
  text: { type: String, required: true },
  avatar: { type: String, default: 'https://i.pravatar.cc/150' }, 
  createdAt: { type: Date, default: Date.now }
}));

// --- 4. API ROUTES (Must come BEFORE static files) ---
app.get('/api/destinations', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/bookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ success: true, message: 'Booking stored!' });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/reviews', async (req, res) => {
  try {
    const { name, stars, text, avatar, role } = req.body;
    const newReview = new Review({ name, stars, text, avatar, role });
    await newReview.save();
    res.status(201).json(newReview); 
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// --- 5. SERVE FRONTEND (The order matters!) ---
// 1. First, tell Express where the static files (JS, CSS, Images) are.
const buildPath = path.resolve(__dirname, '..', 'build');
app.use(express.static(buildPath));

// The ':splat' gives the wildcard a name, and '*' tells it to match everything.
// This is the mandatory syntax for Express 5.0+
app.get('/:splat*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// --- 6. SERVER START ---
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
