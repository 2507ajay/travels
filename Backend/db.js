// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // FIX: Define the variable by pulling it from process.env
    const MONGO_URI = process.env.MONGO_URI;

    if (!MONGO_URI) {
      console.error("❌ ERROR: MONGO_URI is not defined in Environment Variables!");
      process.exit(1);
    }

    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 15000, 
      socketTimeoutMS: 45000,         
      family: 4, // Essential for Render -> Atlas stability
    });
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    
    // Safety: Disable buffering to prevent the 10s hang on failed queries
    mongoose.set('bufferCommands', false);

  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Delay exit to allow Render to finish writing the logs
    setTimeout(() => process.exit(1), 5000); 
  }
};

module.exports = connectDB;
