import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BookingPage.css';

const BookingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    number: '', 
    location: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // UPDATED: Points to your live Render backend
      const response = await fetch('https://travels-2-czoy.onrender.com/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(`✨ Success! Trip booked for ${formData.name}.`);
        navigate('/'); 
      } else {
        alert(`Error: ${data.message || "Failed to book"}`);
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Could not connect to the server. Please check your internet.");
    }
  };

  return (
    <div className="booking-container">
      <motion.div 
        key="booking-form-unique"
        initial={{ opacity: 0, scale: 0.9, y: 30 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="booking-card"
      >
        <h2>Secure Your Spot</h2>
        <p>Journey to the edge of the world with us.</p>

        <form onSubmit={handleSubmit} className="booking-form">
          <input 
            type="text" 
            name="name"
            placeholder="Full Name" 
            value={formData.name}
            required 
            onChange={handleChange} 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email Address" 
            value={formData.email}
            required 
            onChange={handleChange} 
          />
          <input 
            type="tel" 
            name="number"
            placeholder="Phone Number" 
            value={formData.number}
            required 
            onChange={handleChange} 
          />
          <input 
            type="text" // Fixed type
            name="location"
            placeholder="Where do you want to go?" 
            value={formData.location} // FIXED: matched to state key
            required 
            onChange={handleChange} 
          />
          
          <button type="submit" className="btn-submit">Confirm Booking</button>
          <button type="button" className="btn-cancel" onClick={() => navigate('/')}>
            Go Back
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default BookingPage;
