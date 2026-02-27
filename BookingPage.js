import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BookingPage.css';

const BookingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', number: '' , location: ''});

  // Single handler for all inputs to keep focus stable
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
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert(`Success! Trip booked for ${formData.name}.`);
        navigate('/'); 
      }
    } catch (error) {
      alert("Server is offline. Check your backend connection.");
    }
  };

  return (
    <div className="booking-container">
      {/* // Add a unique key to the motion div */}
<motion.div 
  key="booking-form-unique" // <--- Add this stable key
  initial={{ opacity: 0, scale: 0.9, y: 30 }} 
  animate={{ opacity: 1, scale: 1, y: 0 }} 
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="booking-card"
>
        <h2>Secure Your Spot</h2>
        <p>Journey to the edge of the world with us.</p>

        <form onSubmit={handleSubmit} className="booking-form">
          {/* Added 'name' and 'value' to every input */}
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
            type="loc" 
            name="location"
            placeholder="Location" 
            value={formData.data}
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