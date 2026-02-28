const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose'); // Moved up for clarity
require('dotenv').config();
const connectDB = require('./db'); 

const app = express();

// --- 1. CONNECT TO DATABASE ---
connectDB();

// --- 2. MIDDLEWARE ---
// FIX: Added more robust CORS to handle Render's dynamic nature
app.use(cors({
  origin: "*", // Allows all origins during testing to fix the 400/CORS issues
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json()); 

// --- 3. MODELS ---
// FIX: Use 'mongoose.models.Name || model' to prevent "OverwriteModelError"
const Booking = mongoose.models.Booking || mongoose.model('Booking', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  location: { type: String, required: true },
  bookingDate: { type: Date, default: Date.now }
}));

const Destination = mongoose.models.Destination || mongoose.model('Destination', new mongoose.Schema({
  name: String,
  state: String,
  rating: Number,
  img: String
}));

const Review = mongoose.models.Review || mongoose.model('Review', new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: 'Explorer' },
  stars: { type: Number, required: true, min: 1, max: 5 },
  text: { type: String, required: true },
  avatar: { type: String, default: 'https://i.pravatar.cc/150' }, 
  createdAt: { type: Date, default: Date.now }
}));

// --- 4. API ROUTES ---

// Destinations
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

// Bookings
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
    await newBooking.save(); // TABLE CREATION HAPPENS HERE
    res.status(201).json({ success: true, message: 'Booking stored!' });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Reviews
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
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview); 
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// --- 5. SERVE FRONTEND (Corrected) ---
const buildPath = path.join(__dirname, 'build'); // Adjust if build is elsewhere
app.use(express.static(buildPath));

// FIX: Standard React Router catch-all
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(buildPath, 'index.html'));
  }
});

// --- 6. SERVER START ---
// FIX: Explicitly bind to '0.0.0.0' for Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
