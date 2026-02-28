import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Star } from 'lucide-react'; // Added Star for rating
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Explore.css';

const Explore = () => {
  const navigate = useNavigate();
  
  // 1. Setup state for dynamic destinations
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. Fetch data from your backend (using the same port 5000 from AdminPage)
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/destinations');
        setDestinations(response.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  return (
    <section id="explore-section" className="explore-section">
      <button onClick={() => navigate('/')} className="back-home-btn">
        ← Back to Home
      </button>

      <div className="explore-header">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="badge-accent"
        >
          Discover Your Next Story
        </motion.span>
        <h2>Explore Destinations</h2>
        <div className="header-line"></div>
      </div>

      <div className="explore-grid">
        {isLoading ? (
          <p>Loading adventures...</p>
        ) : (
          destinations.map((dest, index) => (
            <motion.div 
              key={dest._id || index}
              className="explore-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="explore-img-wrapper">
                {/* Dynamic Image from DB */}
                <img src={dest.img} alt={dest.name} />
                <div className="category-tag">
                  <Compass size={20} />
                  <span>{dest.state}</span>
                </div>
              </div>
              
              <div className="explore-details">
                <h3>{dest.name}</h3>
                
                {/* CENTERED OVERALL RATING DISPLAY */}
                <div className="rating-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', margin: '10px 0' }}>
                   <Star size={16} fill="#ffb400" color="#ffb400" />
                   <span style={{ fontWeight: 'bold' }}>{dest.rating}</span>
                   <span style={{ color: '#666', fontSize: '0.8rem' }}>(Overall Rating)</span>
                </div>

                <button className="explore-cta">
                  View Trips <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default Explore;