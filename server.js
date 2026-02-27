const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); 
app.use(express.json()); 

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/voyager_db';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// --- 1. SCHEMAS & MODELS ---

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

// --- 2. DESTINATION ROUTES ---

app.get('/api/destinations', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/destinations', async (req, res) => {
  try {
    const newDestination = new Destination(req.body);
    await newDestination.save();
    res.status(201).json({ success: true, data: newDestination });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// --- 3. BOOKING ROUTES ---

app.get('/api/bookings', async (req, res) => {
  try {
    const allBookings = await Booking.find();
    res.json(allBookings);
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

// --- 4. REVIEW ROUTES (Real-time Backend Logic) ---

// GET: Fetch all reviews for the slider
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Submit a new review from the modal
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

// --- SERVER START ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});