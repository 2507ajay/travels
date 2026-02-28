// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Increased timeouts to prevent "buffering timed out" on Render
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //serverSelectionTimeoutMS: 30000, // Wait 30 seconds for initial connection
     // socketTimeoutMS: 45000,         // Close sockets after 45 seconds of inactivity
    });
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Optional: Don't exit(1) immediately on Render so you can see logs
    setTimeout(() => process.exit(1), 5000); 
  }
};

module.exports = connectDB;


