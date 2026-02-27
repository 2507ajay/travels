import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, CheckCircle, BarChart3, MapPin } from 'lucide-react';
import './AdminPage.css';
import axios from 'axios';

const AdminPage = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());

  const [formData, setFormData] = useState({
    name: '',
    state: '',
    rating: '',
    img: ''
  });
  const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Create a clean object to send
  const destinationToUpload = {
    name: formData.name,
    state: formData.country,
    rating: parseFloat(formData.rating), // Convert string to number
    img: formData.img
  };

  try {
    const response = await fetch('http://localhost:5000/api/destinations', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(destinationToUpload)
    });

    const result = await response.json();

    if (response.ok) {
      alert("✨ Destination Published Successfully!");
      setFormData({ name: '', state: '', rating: '', img: '' }); 
    } else {
      alert(`Error: ${result.message}`);
    }
  } catch (error) {
    console.error("Connection Error:", error);
    alert("Could not connect to the server. Is it running on port 5000?");
  }
};


  /*const weeklyData = [
    { day: 'Mon', value: 40 }, { day: 'Tue', value: 70 }, { day: 'Wed', value: 45 },
    { day: 'Thu', value: 90 }, { day: 'Fri', value: 65 }, { day: 'Sat', value: 80 }, { day: 'Sun', value: 95 },
  ];*/

 // --- BACKEND STATE ---
  const [customerBookings, setCustomerBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  // 1. Function to fetch data from your DB
  const fetchBookings = async () => {
    try {
      setIsLoading(true);
      // Replace this URL with your actual backend API (e.g., http://localhost:5000/api/bookings)
      const response = await fetch('http://localhost:5000/api/bookings');
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const data = await response.json();
      setCustomerBookings(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      // Fallback to mock data if API fails so you can still see the UI
      console.error("Using mock data due to error");
    } finally {
      setIsLoading(false);
    }
  };



   
  useEffect(() => {
    fetchBookings();
     const timer = setInterval(() => setTime(new Date()), 1000);
     /// refresh...=========================
  const dataRefresh = setInterval(fetchBookings, 30000);

  return () => {
      clearInterval(timer);
      clearInterval(dataRefresh);
    };
  }, []);



  // =================== Review fetchBookings =======================

  const [reviewCount, setReviewCount] = useState(0);
  const API_URL_REVIEWS = 'http://localhost:5000/api/reviews';

  useEffect(() => {
    const fetchReviewStats = async () => {
      try {
        const res = await axios.get(API_URL_REVIEWS);
        // Set the count based on the number of items in the array
        setReviewCount(res.data.length);
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };
    fetchReviewStats();
  }, []);


  return (
    <div className="admin-body">
      <header className="admin-header">
        <div className="header-left">
          <motion.button 
            whileHover={{ x: -4 }}
            onClick={() => navigate('/')} 
            className="back-btn"
          >
            <ArrowLeft size={18} /> Back to Site
          </motion.button>
          <h1 className="admin-title">Admin Dashboard</h1>
        </div>

        <div className="header-right">
          <div className="live-indicator">
            <span className="pulse-dot"></span>
            <span className="live-text">SYSTEM LIVE</span>
          </div>
          <div className="real-time-clock">
            <span className="clock-time">{time.toLocaleTimeString()}</span>
            <span className="clock-date">{time.toLocaleDateString()}</span>
          </div>
        </div>
      </header>

     {/* Stats Grid */}
      <div className="admin-stats-grid">
        <div className="stat-box">
          <Users color="#3b82f6" size={24} />
          <p>Total Users</p>
          <h2>{reviewCount.toLocaleString()}</h2>
        </div>
        <div className="stat-box">
          <CheckCircle color="#10b981" size={24} />
          <p>Bookings</p>
          <h2>{customerBookings.length}</h2> {/* Dynamic count from DB */}
        </div>
        <div className="stat-box">
          <BarChart3 color="#f59e0b" size={24} />
          <p>Conversion</p>
          <h2>18.4%</h2>
        </div>
      </div>

      <div className="admin-grid-layout">
        <div className="admin-card">
          <div className="card-header">
            <h3>Booking Customer Details</h3>
            {isLoading && <span className="loading-text">Updating...</span>}
          </div>

          {error ? (
            <div className="error-message">Error: {error}</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Destination</th>
                  <th>Date</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
                {customerBookings.length > 0 ? (
                  customerBookings.map((booking) => (
                    <tr key={booking._id || booking.id}>
                      <td>
                        <div className="user-info">
                          <span className="user-name">{booking.name}</span>
                          <span className="user-email">{booking.email}</span>
                        </div>
                      </td>
                      <td>
                        <div className="dest-info">
                          <MapPin size={14} /> {booking.location}
                        </div>
                      </td>
                      <td>{booking.Date}</td>
                      <td>
                        <span className={`status-badge ${booking.status?.toLowerCase()}`}>
                          {booking.number}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="4" style={{textAlign: 'center', padding: '2rem'}}>No bookings found.</td></tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* =====================check den=============== */}

        <div className="admin-container" style={{ padding: '50px' }}>
      <h2>Add New Destination</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <input 
          type="text" placeholder="Destination Name" 
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          required 
        />
        <input 
          type="text" placeholder="State" 
          value={formData.state} 
          onChange={(e) => setFormData({...formData, state: e.target.value})} 
          required 
        />
        <input 
          type="number" step="0.1" placeholder="Rating (e.g. 4.5)" 
          value={formData.rating} 
          onChange={(e) => setFormData({...formData, rating: e.target.value})} 
          required 
        />
        <input 
          type="text" placeholder="Image URL (Unsplash link)" 
          value={formData.img} 
          onChange={(e) => setFormData({...formData, img: e.target.value})} 
          required 
        />
        <button type="submit" className="btn-primary">Upload to DB</button>
      </form>
    </div>

      </div>
    </div>




  );
};

export default AdminPage;
