import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import { Compass, MapPin, Search, Star } from 'lucide-react';
import axios from 'axios'; // Added missing axios
import { Compass, MapPin, Search, Star, X } from 'lucide-react'; // Added X for close button

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
  const API_URL_REVIEWS = 'http://localhost:5000/api/reviews';
  const API_URL_DESTINATIONS = 'http://localhost:5000/api/destinations';

  // --- States ---
  const [search, setSearch] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [testimonials, setTestimonials] = useState([]); // Added for reviews
  const [loading, setLoading] = useState(true);
  
  // Rating Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRating, setUserRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [reviewerName, setReviewerName] = useState(""); 
  const [selectedImage, setSelectedImage] = useState(null);

  // --- Logic Functions ---
  const filtered = destinations.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
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
  }, []);


  // =========================pop widow =================================
  // 1. New Form State for the Popup
  const [popupFormData, setPopupFormData] = useState({ name: '', email: '', number: '' , location: ''});
  // 2. Handle Input Changes
  const handlePopupChange = (e) => {
    const { name, value } = e.target;
    setPopupFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Handle Submit to DB (matching your BookingPage logic)
 const handlePopupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(popupFormData),
      });
      const data = await response.json();
      if (data.success) {
        alert(`Success! Trip booked for ${popupFormData.name}.`);
        navigate('/'); 
      }
    } catch (error) {
      alert("Server is offline. Check your backend connection.");
    }
  };


  // --- Automatic Popup Logic ---
  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenWelcome');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowWelcomePopup(true);
        sessionStorage.setItem('hasSeenWelcome', 'true'); // Mark as seen
      }, 1500); // Appear after 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  // ============================================Fetch Reviews============================================
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
  }, []);

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

  // --- ==============================================Submit Review Logic ===================================---
 const submitRating = async () => {
  // 1. Improved Validation
  if (!reviewerName.trim() || !reviewText.trim()) {
    alert("Please enter both your name and a review message.");
    return;
  }

  const newEntry = {
    name: reviewerName.trim(),
    stars: userRating,
    text: reviewText.trim(),
    // Using a fallback avatar if needed
    avatar: `https://i.pravatar.cc/150?u=${reviewerName.trim()}` 
  };

  try {
    // 2. Post to API
    const response = await axios.post(API_URL_REVIEWS, newEntry);
    
    // 3. Update local state immediately so the UI reflects the new review
    setTestimonials((prev) => [response.data, ...prev]);
    
    // 4. Reset and Close
    setIsModalOpen(false);
    setReviewerName('');
    setReviewText('');
    setUserRating(5);
    setSelectedImage(null);
    
    alert("Thank you for your review!"); // Confirmation for user
  } catch (err) {
    console.error("Error saving review:", err);
    alert("Failed to save review. Please check if your server is running.");
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
          <button 
    className="nav-explore-btn" 
    style={{ background: 'none', border: 'none', cursor: 'pointer',fontWeight: '500', 
    color: 'white' }}
    onClick={() => navigate('/explore')}
  >
    Explore
  </button>

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
          <p className="hero-subtitle">Travel for those who have seen it all, but felt nothing quite like this.</p>
          <div className="search-bar">
            <Search className="search-icon" />
            <input type="text" placeholder="Where to next?" value={search} onChange={handleSearchChange} />
            <button className="search-btn"><Compass size={20}/></button>
          </div>
        </div>
      </section>

      {/* ====================================pop window =============================== */}

    {/* --- WELCOME POPUP MODAL --- */}
{/* --- WELCOME POPUP MODAL --- */}
     <AnimatePresence>
  {showWelcomePopup && (
    <motion.div className="modal-overlay-fixed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="booking-card popup-floating" initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}>
        
        <button className="close-popup-top" onClick={() => setShowWelcomePopup(false)}>
          <X size={24} />
        </button>

        <h2>Booking Now</h2>
        <p>Enter your details to secure this offer instantly.</p>

        <form className="booking-form" onSubmit={handlePopupSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Full Name" 
            value={popupFormData.name}
            required 
            onChange={handlePopupChange} /* Corrected handler */
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email Address" 
            value={popupFormData.email}
            required 
            onChange={handlePopupChange} /* Corrected handler */
          />
          <input 
            type="tel" 
            name="number"
            placeholder="Phone Number" 
            value={popupFormData.number}
            required 
            onChange={handlePopupChange} /* Corrected handler */
          />
          <input 
            type="text" /* Changed from 'loc' to 'text' for standard compatibility */
            name="location"
            placeholder="Location" 
            value={popupFormData.location} /* Corrected value key */
            required 
            onChange={handlePopupChange} /* Corrected handler */
          />
          
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
                {[...filtered, ...filtered].map((item, index) => (
                  <motion.div key={`${item._id}-${index}`} layout className="card">
                    <img src={item.img} alt={item.name} />
                    <div className="card-overlay">
                      <span className="location"><MapPin size={14}/> {item.country || item.state}</span>
                      <h3>{item.name}</h3>
                      <div className="rating"><Star size={14} className="star"/> {item.rating}</div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>
      </section>

     

      {/* Newsletter / Guide Info */}
      <section className="newsletter">
        <div className="newsletter-content">
          <span className="badge">Verified Expert</span>
          <h2>Your Adventure Guide</h2>
          <div className="guide-card">
            <div className="guide-info">
              <div className="detail-item">
                <strong>Guide Name</strong>
                <p>KALYAN</p>
              </div>
              <div className="detail-item">
                <strong>Contact</strong>
                <a href="tel:+919381849299" className="phone-link">+91 93818 49299</a>
              </div>
            </div>
            <div className="stats-grid">
              <div className="stat-box"><span className="stat-val">12</span><span className="stat-label">Rooms</span></div>
              <div className="stat-box"><span className="stat-val">04</span><span className="stat-label">Vehicles</span></div>
            </div>
            <button className="contact-btn"><span>Connect Now</span></button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
  <div className="testimonial-layout centered">
    
    {/* CENTERED: Overall Rating Summary */}
    <div className="rating-summary">
      <h2 className="title">What People Say</h2>
      
      <div className="overall-stats">
        <div className="stats-inner">
          <span className="average-num">{averageRating}</span>
          <div className="average-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={star <= Math.round(averageRating) ? "star-filled" : "star-empty"}>
                ★
              </span>
            ))}
          </div>
          <p className="total-count">Trusted by {totalReviews} members</p>
        </div>
      </div>

      <button className="btn-primary" onClick={() => {
  console.log("Opening Modal..."); // Debug log
  setIsModalOpen(true);
}}>
  Leave a Review
</button>

    </div>

    {/* BOTTOM: The Infinite Scroll Track */}
    <div className="testimonial-container full-width">
      <div className="scroll-wrapper">
        <div className="scroll-track">
          {testimonials.length > 0 ? [...testimonials, ...testimonials].map((t, i) => (
            <div className="testimonial-card" key={i}>
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
          )) : <p>No reviews yet. Be the first!</p>}
        </div>
      </div>
    </div>

  </div>
</section>

      {/* Rating Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="modal-overlay" onClick={() => setIsModalOpen(false)}
          >
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

      {/* Footer */}
       <footer className="footer">
                <div className="footer-content">
                   <div className="footer-brand">
                            <div className="logo">
                              <Compass className="icon-blue" />
                               <span>Sri Balaji Guide Services</span>

                       </div>   
                       <p>Curating extraordinary experiences for the modern explorer. Beyond the map, lies the soul of travel.</p>     
                    </div>
    <div className="footer-links">
      <h4>Navigation</h4>
      <ul>

          <button 
     
   style={{ 
    background: 'none', 
    border: 'none', 
    cursor: 'pointer',
    fontWeight: '200', 
    color: 'blue',
    // Size adjustments below
    fontSize: '15px',      /* Controls text size */
    padding: '10px 20px',  /* Adds space around the text (Vertical Horizontal) */
    transform: 'scale(1.1)' /* Optional: increases everything by 10% */
  }}
    onClick={() => navigate('/explore')}
  >
    Explore
  </button>

        <li><a href="#stays">Luxury Stays</a></li>

        <li><a href="#journal">Travel Journal</a></li>

      </ul>

    </div>
    <div className="footer-links">
      <h4>Support</h4>
      <ul>

        <li><a href="#help">Help Center</a></li>

        <li><a href="#privacy">Privacy Policy</a></li>

        <li><a href="#terms">Terms of Use</a></li>

        <li>
                {/* Clean Button Implementation */}
                <button
                  onClick={handleRedirect}
                  className="contact-btn-link"

                >

                  Contact Us
                </button>
              </li>

      </ul>

    </div>
    <div className="footer-social">
      <h4>Connect</h4>
      <div className="social-icons">

        <span>IG</span>

        <span>TW</span>

        <span>FB</span>
      </div>
    </div>
  </div>
  <hr className="footer-divider" />
  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()}-SRI BALAJI GUIDE SERIVCE. Crafted for the curious.</p>
  </div>
</footer>
    </div>

  );

};

// Main App Component
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