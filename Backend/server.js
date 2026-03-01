const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
app.use(cors()); 
app.use(express.json());

// --- Updated CORS Configuration ---
const allowedOrigins = [
  'http://localhost:3000',                  // Local React development
  'https://travels-works.onrender.com',    // Your NEW live site
      
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


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

// 1. Move UP from Backend, then into the 'build' folder created by react-scripts
const buildPath = path.join(__dirname, '..', 'build'); 

// 2. Serve static assets (JS/CSS) so the browser can find them
// This MUST come before the catch-all route
app.use(express.static(buildPath));

// 3. Catch-all route using Regex Literal to prevent Node 22 PathErrors
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'), (err) => {
    if (err) {
      console.error("❌ Error loading index.html:", err);
      res.status(500).send("Frontend build not found. Verify 'npm run build' ran successfully.");
    }
  });
});

// 2. Use the variable from your .env file
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.error('❌ Connection Error:', err));

// ... rest of your routes ...

// 3. Port logic for Local vs Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
