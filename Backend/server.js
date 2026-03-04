const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const connectDB = require('./db');
const path = require('path');

const app = express();

// --- MIDDLEWARE ---
app.use(cors()); 
app.use(express.json()); 

connectDB();

// --- 1. SCHEMAS & MODELS ---

const Booking = mongoose.model('Booking', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  location: { type: String, required: true },
  bookingDate: { type: Date, default: Date.now }
}));

const Destination = mongoose.model('Destination', new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Added unique constraint
  state: String,
  rating: { type: Number, default: 0 }, 
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

// UPDATED POST: Prevents double-entry of the same destination
app.post('/api/destinations', async (req, res) => {
  try {
    const { name } = req.body;
    
    // Check if name already exists in DB
    const existing = await Destination.findOne({ name });
    if (existing) {
      return res.status(400).json({ success: false, message: "Destination already exists!" });
    }

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

// --- 4. REVIEW ROUTES ---

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

// 1. Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, '../build')));

// 2. Handle any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// --- SERVER START ---
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
