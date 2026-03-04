import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios'; 
import { Compass, MapPin, Search, Star, X } from 'lucide-react';

// Page Imports
import BookingPage from './BookingPage';
import Explore from './Explore';
import AdminPage from './AdminPage';
import ContactPage from './ContactPage';
import './App.css';

const TravelApp = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  // --- Updated URL Constants ---
  const API_URL_REVIEWS = 'https://travels-works.onrender.com/api/reviews';
  const API_URL_DESTINATIONS = 'https://travels-works.onrender.com/api/destinations';

  // --- States ---
  const [search, setSearch] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [testimonials, setTestimonials] = useState([]); 
  const [loading, setLoading] = useState(true);
  
  // Rating Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRating, setUserRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [reviewerName, setReviewerName] = useState(""); 
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered = (destinations || []).filter(d =>
    d?.name?.toLowerCase().includes(search.toLowerCase())
  );

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.toLowerCase() === 'admin') navigate('/admin');
  };

  const handleRedirect = () => navigate('/contact');

  // --- API Effects ---
  
  // Fetch Destinations
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(API_URL_DESTINATIONS);
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, [API_URL_DESTINATIONS]);

  // --- Popup Logic ---
  const [popupFormData, setPopupFormData] = useState({ name: '', email: '', number: '' , location: ''});
  
  const handlePopupChange = (e) => {
    const { name, value } = e.target;
    setPopupFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePopupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://travels-works.onrender.com/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(popupFormData),
      });

      if (response.ok) {
        alert(`Success! Trip booked for ${popupFormData.name}.`);
        setShowWelcomePopup(false);
        setPopupFormData({ name: '', email: '', number: '', location: '' });
      } else {
        const errorData = await response.json();
        alert(`Booking Failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Popup Submit Error:", error);
      alert("Server is waking up. Please try again in 30 seconds.");
    }
  };

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenWelcome');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowWelcomePopup(true);
        sessionStorage.setItem('hasSeenWelcome', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // --- Fetch Reviews ---
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(API_URL_REVIEWS);
        setTestimonials(res.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
    fetchReviews();
  }, [API_URL_REVIEWS]);

  const totalReviews = testimonials.length;
  const averageRating = totalReviews > 0 
    ? (testimonials.reduce((acc, t) => acc + t.stars, 0) / totalReviews).toFixed(1) 
    : 0;

  // Auto-Scroll Effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer && destinations.length > 0) {
      let scrollAmount = 0;
      const step = 1;
      const scrollStep = () => {
        scrollAmount += step;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) scrollAmount = 0;
        scrollContainer.scrollLeft = scrollAmount;
        requestAnimationFrame(scrollStep);
      };
      const animationId = requestAnimationFrame(scrollStep);
      return () => cancelAnimationFrame(animationId);
    }
  }, [destinations]);

  // --- Submit Review Logic ---
  const submitRating = async () => {
    if (!reviewerName.trim() || !reviewText.trim()) {
      alert("Please enter both your name and a review message.");
      return;
    }

    const newEntry = {
      name: reviewerName.trim(),
      stars: userRating,
      text: reviewText.trim(),
      avatar: `https://i.pravatar.cc/150?u=${reviewerName.trim()}` 
    };

    try {
      // FIX: Using 'res' and updating state immediately
      const res = await axios.post(API_URL_REVIEWS, newEntry);
      setTestimonials((prev) => [res.data, ...prev]);
      
      setIsModalOpen(false);
      setReviewerName('');
      setReviewText('');
      setUserRating(5);
      setSelectedImage(null);
      
      alert("Thank you for your review!");
    } catch (err) {
      console.error("Error saving review:", err);
      alert("Failed to save review.");
    }
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Compass className="icon-blue" />
          <span>Sri Balaji Guide</span>
        </div>
        <div className="nav-links">
          <button className="nav-explore-btn" onClick={() => navigate('/explore')}>Explore</button>
          <a href="#stays">Stays</a>
          <a href="#journal">Journal</a>
        </div>
        <button className="btn-primary" onClick={() => navigate('/bookpage')}>Book Trip</button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80" className="hero-bg" alt="Hero" />
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ opacity: { duration: 1 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
            className="hero-title"
          >
            Beyond the <br/><span>Horizon.</span>
          </motion.h1>
          <p className="hero-subtitle">Travel for those who have seen it all.</p>
          <div className="search-bar">
            <Search className="search-icon" />
            <input type="text" placeholder="Where to next?" value={search} onChange={handleSearchChange} />
            <button className="search-btn"><Compass size={20}/></button>
          </div>
        </div>
      </section>

      {/* Welcome Popup */}
      <AnimatePresence>
        {showWelcomePopup && (
          <motion.div className="modal-overlay-fixed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="booking-card popup-floating" initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}>
              <button className="close-popup-top" onClick={() => setShowWelcomePopup(false)}><X size={24} /></button>
              <h2>Booking Now</h2>
              <form className="booking-form" onSubmit={handlePopupSubmit}>
                <input type="text" name="name" placeholder="Full Name" value={popupFormData.name} required onChange={handlePopupChange} />
                <input type="email" name="email" placeholder="Email Address" value={popupFormData.email} required onChange={handlePopupChange} />
                <input type="tel" name="number" placeholder="Phone Number" value={popupFormData.number} required onChange={handlePopupChange} />
                <input type="text" name="location" placeholder="Location" value={popupFormData.location} required onChange={handlePopupChange} />
                <button type="submit" className="btn-submit">Confirm Booking</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Destinations */}
      <section className="destinations">
        <h2 className="section-title">Trending Destinations</h2>
        <div className="scroll-wrapper">
          <div className="grid-layout" ref={scrollRef}>
            {loading ? <p>Loading adventures...</p> : (
              <AnimatePresence>
                {filtered.map((item) => (
                  <motion.div key={item._id} layout className="card">
                    <img src={item.img} alt={item.name} />
                    <div className="card-overlay">
                      <span className="location"><MapPin size={14}/> {item.country || item.state}</span>
                      <h3>{item.name}</h3>
                      {/* PRESERVED: Centered Rating Display */}
                      <div className="rating" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <Star size={14} className="star"/> {item.rating}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>
      </section>

      {/* Guide Info */}
      <section className="newsletter">
        <div className="newsletter-content">
          <span className="badge">Verified Expert</span>
          <h2>Your Adventure Guide</h2>
          <div className="guide-card">
            <div className="guide-info">
              <div className="detail-item"><strong>Guide Name</strong><p>KALYAN</p></div>
              <div className="detail-item"><strong>Contact</strong><a href="tel:+919381849299" className="phone-link">+91 93818 49299</a></div>
            </div>
            <button className="contact-btn"><span>Connect Now</span></button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <div className="testimonial-layout centered">
          <div className="rating-summary">
            <h2 className="title">What People Say</h2>
            <div className="overall-stats">
              <div className="stats-inner">
                <span className="average-num">{averageRating}</span>
                <div className="average-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className={s <= Math.round(averageRating) ? "star-filled" : "star-empty"}>★</span>
                  ))}
                </div>
                <p className="total-count">Trusted by {totalReviews} members</p>
              </div>
            </div>
            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Leave a Review</button>
          </div>

          <div className="testimonial-container full-width">
            <div className="scroll-wrapper">
              <div className="scroll-track">
                {testimonials.map((t) => (
                  <div className="testimonial-card" key={t._id}>
                    <div className="stars">{"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}</div>
                    <p className="content">{t.text}</p>
                    <div className="user-info">
                      <img src={t.avatar} alt={t.name} className="avatar" />
                      <div className="user-details">
                        <h4>{t.name}</h4>
                        <span>{t.role || "Explorer"}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <motion.div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Share Your Experience</h3>
              <div className="photo-upload-container">
                <label htmlFor="photo-upload" className="photo-label">
                  {selectedImage ? <img src={selectedImage} alt="Preview" className="upload-preview" /> : <div className="upload-placeholder"><span>+</span><p>Add Photo</p></div>}
                </label>
                <input id="photo-upload" type="file" accept="image/*" onChange={handleImageChange} hidden />
              </div>
              <input type="text" placeholder="Your Name" className="modal-input" value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} />
              <div className="star-input">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={28} style={{ cursor: 'pointer' }}
                    fill={star <= userRating ? "#38bdf8" : "transparent"}
                    color={star <= userRating ? "#38bdf8" : "#94a3b8"}
                    onClick={() => setUserRating(star)}
                  />
                ))}
              </div>
              <textarea placeholder="Describe your journey..." value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
              <button className="btn-primary" onClick={submitRating}>Send Review</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="footer">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()}-SRI BALAJI GUIDE SERVICE. Crafted for the curious.</p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<TravelApp />} />
      <Route path="/bookpage" element={<BookingPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
