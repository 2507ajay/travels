import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './ContactPage.css';
import contact1 from './contact.jpg';

const ContactPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  // 1. Setup state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. WhatsApp Config
    const phoneNumber = "+91 9618413748"; // Your number with country code (no +)
    
    // 3. Construct the Message
    const text = `*New Inquiry from Website*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Message:* ${formData.message}`;

    // 4. Open WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');

    // UI logic
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page-wrapper">
      {/* LEFT SECTION: Info & Image */}
      <div className="contact-left">
        <button className="back-btn-pill" onClick={() => navigate('/')}>
          <ChevronRight size={16} /> <span>Back to Exploring</span>
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="contact-intro"
        >
          <span className="subtitle">Him</span>
          <h1>Let's Plan Your <span className="arrow-red">{"-->"}</span> <br/>Next Chapter.</h1>
          <p>Whether it's spiritual journey or luxury, our guides are ready to assist.</p>
        </motion.div>

        <div className="contact-image-container">
          <h3>Contact info</h3>
          <div className="temple-card">
            <img src={contact1} alt="Tirupati Temple" />
            
          </div>
        </div>

        <div className="info-list">
          <h3>Info items</h3>
          <div className="info-row">
            <div className="icon-box blue-bg"><Mail size={18} /></div>
            <div>
              <h4>Email Us</h4>
              <p>hello@sribalajiguide.com</p>
            </div>
          </div>
          <div className="info-row">
            <div className="icon-box blue-text"><Phone size={18} /></div>
            <div>
              <h4>Call Anytime</h4>
              <p>+91 93818 49299</p>
            </div>
          </div>
          <div className="info-row">
            <div className="icon-box blue-text"><MapPin size={18} /></div>
            <div>
              <h4>Visit Office</h4>
              <p>Main Street, Tirupati, AP, India</p>
            </div>
          </div>
        </div>
      </div>

    
    <div className="contact-right">
        <div className="contact-card-header">
           <span className="subtitle">Him</span>
           <h1>Let's Plan Your <span className="arrow-red">{">"}</span> <br/>Next Chapter.</h1>
           <p>Contact Us to this +91 93818 49299 journey guides are ready to assist.</p>
        </div>

        <div className="contact-form-container">
          <h3>Contact Form</h3>
          
          <div className="form-white-card">
            {submitted ? (
              <div className="success-state">
                <span className="ssb-logo">SSB</span>
                <div>
                  <h4>Redirecting to WhatsApp...</h4>
                  <p>Our lead guide will see your message instantly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-input-group">
                  <input 
                    type="text" 
                    name="name" // Added name attribute
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                  <span className="placeholder-hint">John Doe</span>
                </div>
                <div className="form-input-group">
                  <input 
                    type="email" 
                    name="email" // Added name attribute
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                  <span className="placeholder-hint">required</span>
                </div>
                <div className="form-input-group">
                  <textarea 
                    name="message" // Added name attribute
                    placeholder="Email Message" 
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <span className="placeholder-hint">required</span>
                </div>
                <button type="submit" className="send-btn-outline">
                  Send to WhatsApp <ChevronRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

