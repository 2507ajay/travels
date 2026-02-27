/* --- Google Fonts --- */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

/* --- Root Variables --- */
:root {
  --bg: #050505;
  --accent: #38bdf8;
  --glass: rgba(255, 255, 255, 0.1);
  --primary-btn: rgb(6, 99, 97);
  --primary-hover: rgb(8, 120, 118);
}

/* --- Global Reset & Base Styles --- */
* {
  box-sizing: border-box;
}

body { 
  margin: 0; 
  background: var(--bg); 
  color: white; 
  position: relative;
  font-family: 'Inter', sans-serif; 
  overflow-x: hidden; 
  line-height: 1.6;
  width: 100%;
}

/* --- NAVBAR --- */
.navbar {
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  position: fixed; 
  top: 20px; 
  left: 50%;
  transform: translateX(-50%); 
  width: 90%; 
  max-width: 1200px; 
  z-index: 1000; 
  padding: 1rem 2rem; 
  background: rgba(0, 0, 0, 0.6); 
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  transition: all 0.3s ease;
}

.logo { 
  display: flex; 
  align-items: center; 
  gap: 10px; 
  font-weight: 900; 
  font-size: 1.5rem; 
  letter-spacing: -1px; 
}

.icon-blue { color: var(--accent); }

.nav-links a { 
  color: #94a3b8; 
  text-decoration: none; 
  margin: 0 1rem; 
  text-transform: uppercase; 
  font-size: 0.75rem; 
  letter-spacing: 2px; 
  transition: color 0.3s;
}

.nav-links a:hover { color: white; }

.btn-primary { 
  background: var(--primary-btn); 
  color: white;
  border: none; 
  padding: 0.7rem 1.5rem; 
  border-radius: 50px; 
  font-weight: 700; 
  cursor: pointer;
  white-space: nowrap; 
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(6, 99, 97, 0.3);
}

/* --- HERO SECTION --- */
.hero { 
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center; 
  padding: 140px 20px 60px;
  overflow: hidden; /* Prevents seeing the black background on accidental swipes */
}

.hero-bg { 
  position: absolute;
  inset: 0; 
  width: 100vw; /* Use viewport width instead of 100% */
  height: 100%; 
  object-fit: cover;
  opacity: 0.4;
  z-index: -1; 
  left: 50%;
  transform: translateX(-50%); /* Centers the image regardless of parent padding */
}

.hero-title { 
  font-family: 'Playfair Display', serif; 
  font-size: clamp(2.5rem, 8vw, 6rem); 
  line-height: 1.1; 
  margin-bottom: 1.5rem; 
}

.hero-title span { 
  color: var(--accent); 
  font-style: italic; 
  text-decoration: underline; 
  text-underline-offset: 10px; 
}

.hero-subtitle {
  max-width: 700px;
  margin: 0 auto 2.5rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  background: linear-gradient(to right, #ffffff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
}
@media (max-width: 480px) {
  .navbar {
    width: 92%;
    padding: 0.6rem 1rem;
  }
  .hero {
    padding-top: 160px; /* Increased to ensure clearance */
  }
}

/* --- SEARCH BAR --- */
.search-bar { 
  display: flex; 
  background: var(--glass); 
  border: 1px solid rgba(255,255,255,0.2);
  padding: 8px; 
  border-radius: 20px; 
  width: 100%; 
  max-width: 500px; 
  margin: 0 auto; 
  backdrop-filter: blur(10px);
}

.search-bar input { 
  background: transparent; 
  border: none; 
  outline: none; 
  color: white; 
  flex: 1; 
  padding: 0.8rem; 
  font-size: 1rem; 
}

.search-btn { 
  background: var(--accent); 
  border: none; 
  border-radius: 12px; 
  width: 48px; 
  height: 48px;
  cursor: pointer; 
  display: flex;
  align-items: center;
  justify-content: center;
}

/* --- SECTION TITLES --- */
.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 60px auto 40px;
  display: table;
  text-align: center;
  background: #05070a;
  text-shadow: 0 0 30px rgba(96, 165, 250, 0.2);
  position: relative;
  padding: 0 20px;

}

.section-title::after {

  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 4px;
  background: linear-gradient(90deg, transparent, #60a5fa, #a855f7, transparent);
  border-radius: 2px;
}

/* --- HORIZONTAL SCROLL CARDS --- */
.scroll-wrapper {
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
}

.grid-layout {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 0 10%; /* Matches page margins */
  scrollbar-width: none; 
  -webkit-overflow-scrolling: touch;
}

.grid-layout::-webkit-scrollbar { display: none; }

.card { 
  flex: 0 0 300px; /* Fixed width for horizontal scrolling */
  height: 400px; 
  border-radius: 30px; 
  position: relative; 
  overflow: hidden; 
  background: #111; 
}

.card img { 
  width: 100%; height: 100%; 
  object-fit: cover; 
  opacity: 0.8; 
  transition: 0.5s; 
}

.card:hover img { transform: scale(1.1); }

/* --- ======================================NEWSLETTER ================================== --- */
/* Mobile-First Compact Newsletter Styles */
.newsletter {
  background: #070707;
  padding: 3rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.newsletter-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge {
  color: #04eaf7;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.newsletter h2 {
  color: #04eaf7;
  font: italic 700 clamp(2.2rem, 10vw, 3.5rem) sans-serif;
  line-height: 0.9;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

/* Compact Card Styling */
.guide-card {
  background: #b3b3b3;
  width: 100%;
  max-width: 360px; /* Keeps it tight on larger phones */
  padding: 2.5rem 1.25rem 1.5rem;
  border-radius: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-item strong {
  display: block;
  font-size: 0.65rem;
  text-transform: uppercase;
  color: #444;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
}

.detail-item p, 
.phone-link {
  font-size: 1.5rem; /* Reduced for mobile fitting */
  font-weight: 900;
  color: #000;
  text-decoration: none;
  display: block;
  line-height: 1.1;
}

/* Stats Row - Flex ensures they stay side-by-side */
.stats-grid {
  display: flex;
  gap: 0.75rem;
}

.stat-box {
  background: #fff;
  flex: 1;
  padding: 1.2rem 0.5rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-val {
  font-size: 1.4rem;
  font-weight: 900;
  color: #000;
}

.stat-label {
  font-size: 0.6rem;
  font-weight: 700;
  color: #888;
  text-transform: uppercase;
}

/* Action Button */
.contact-btn {
  background: #000;
  color: #fff;
  border: none;
  padding: 1rem;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.2s;
}

.contact-btn:active {
  opacity: 0.8;
}

/* --- FOOTER --- */
.footer {
  background: radial-gradient(circle at top, #0a0f1a 0%, #020617 100%);
  padding: 80px 10% 40px;
  color: #94a3b8;
  border-top: 1px solid rgba(56, 189, 248, 0.1);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.footer-brand .logo {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #fff;
  letter-spacing: 4px;
}

.footer-brand p { font-size: 0.95rem; max-width: 320px; }

.footer-links h4 {
  color: #fff;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  margin-bottom: 25px;
}

.footer-links ul { list-style: none; padding: 0; }
.footer-links li { margin-bottom: 12px; }
.footer-links a { text-decoration: none; color: #64748b; font-size: 0.9rem; transition: 0.3s; }
.footer-links a:hover { color: var(--accent); transform: translateX(5px); display: inline-block; }

.social-icons { display: flex; gap: 15px; margin-top: 20px; }
.social-icons span {
  background: rgba(255, 255, 255, 0.05);
  padding: 10px 15px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;
}
.social-icons span:hover { background: var(--accent); color: black; }

.footer-divider {
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  margin-bottom: 30px;
}

.footer-bottom { text-align: center; font-size: 0.8rem; text-transform: uppercase; color: #475569; }

/* --- RESPONSIVE MEDIA QUERIES --- */

@media (max-width: 1024px) {
  .footer-content { grid-template-columns: 1fr 1fr; }
  .grid-layout { padding: 0 5%; }
}

@media (max-width: 768px) {
  .navbar { width: 95%; padding: 0.8rem 1.2rem; top: 10px; }
  .nav-links { display: none; } /* Standard practice: hide text links on mobile */
  
  .hero { padding: 120px 20px 40px; }
  
  .news-form { flex-direction: column; align-items: center; }
  .news-form input { max-width: 100%; }
  
  .newsletter { margin: 2rem 20px; padding: 3rem 1.5rem; }
  
  .footer-content { grid-template-columns: 1fr; text-align: center; gap: 40px; }
  .footer-brand p { margin: 0 auto; }
  .social-icons { justify-content: center; }
  
  .card { flex: 0 0 260px; height: 350px; } /* Slightly smaller for mobile swiping */
}

@media (max-width: 480px) {
  .hero-title { font-size: 2.5rem; }
  .logo { font-size: 1.2rem; }
  .btn-primary { padding: 0.5rem 1rem; font-size: 0.8rem; }
}


/* ==================contact us ===================== */
/* Styles the button to look like the other list links */
.contact-btn-link {
  background: none;
  border: none;
  color: #a0aec0; /* Matches your footer link color */
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;
  text-align: left;
}

.contact-btn-link:hover {
  color: #3b82f6; /* Blue highlight on hover */
  text-decoration: underline;
}

/* If you want it to look like a solid button instead: */
.contact-btn-solid {
  background-color: #3b82f6;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;
}

/* ==================service====================== */
/* --- Mobile Responsiveness --- */

/* Container Styling */
.services-section {
  padding: 60px 20px;
  text-align: center;
  background: #f8f9fa; /* Light background for contrast */
  font-family: 'Inter', sans-serif;
}

.services-header h2 {
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 10px;
}

.services-header p {
  color: #666;
  margin-bottom: 40px;
}

/* Grid Layout */
.services-grid {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}

/* Individual Cards */
.service-card {
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 20px;
  width: 300px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eee;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #007bff; /* Accent color change on hover */
}

/* Icons & Typography */
.service-card .icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #222;
}

.service-card p {
  color: #777;
  line-height: 1.6;
  font-size: 0.95rem;
}




/* =============================rating css=========================== */

/* --- Testimonial Section --- */
/* Container & Global Alignment */
/* ============================================================
   TESTIMONIAL SECTION - FULL STYLES
   ============================================================ */

.testimonial-section {
  padding: 80px 20px;
  background: var(--bg);
  color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial-layout.centered {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 50px;
}

/* --- CENTERED BOX DESIGN: Rating Summary --- */
.rating-summary {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.rating-summary .title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 25px;
  line-height: 1.1;
}

.overall-stats {
  background: rgba(255, 255, 255, 0.03);
  padding: 50px 40px;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.2); /* Top light catch */
  backdrop-filter: blur(15px);
  width: 100%;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Glow behind the number */
.overall-stats::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.stats-inner {
  position: relative;
  z-index: 1;
}

.average-num {
  font-size: 6rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(180deg, #ffffff 30%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.average-stars {
  justify-content: center;
  margin: 15px 0;
  font-size: 2rem;
  display: flex;
  gap: 8px;
}

.star-filled { color: #38bdf8; text-shadow: 0 0 15px rgba(56, 189, 248, 0.5); }
.star-empty { color: rgba(255, 255, 255, 0.1); }

.total-count {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #94a3b8;
  font-size: 0.8rem;
}

/* --- SCROLL TRACK: Testimonials --- */
.testimonial-container.full-width {
  width: 100vw;
  margin-top: 20px;
}

.scroll-wrapper {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

.scroll-track {
  display: flex;
  gap: 30px;
  width: max-content;
  animation: scroll 40s linear infinite;
  padding: 30px 0;
}

.scroll-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* --- TESTIMONIAL CARD --- */
.testimonial-card {
  flex: 0 0 320px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 30px;
  border-radius: 28px;
  text-align: left;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  border-color: #38bdf8;
  background: rgba(255, 255, 255, 0.05);
}

.stars {
  color: #38bdf8;
  font-size: 1.1rem;
  margin-bottom: 12px;
}

.content {
  color: #cbd5e1;
  font-size: 0.9rem;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 15px;
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #38bdf8;
}

.user-details h4 {
  margin: 0;
  font-size: 0.95rem;
  color: #f8fafc;
}

.user-details span {
  font-size: 0.75rem;
  color: #38bdf8;
}

/* ============================================================
   MOBILE OPTIMIZATION
   ============================================================ */

@media (max-width: 768px) {
  .testimonial-section {
    padding: 60px 15px;
  }

  .average-num {
    font-size: 4rem;
  }

  .overall-stats {
    padding: 35px 20px;
    border-radius: 24px;
  }

  .testimonial-card {
    flex: 0 0 280px;
    padding: 25px;
  }
}

@media (max-width: 480px) {
  .average-num {
    font-size: 3.2rem;
  }

  .rating-summary .title {
    font-size: 1.8rem;
  }

  .testimonial-card {
    flex: 0 0 260px;
  }

  .content {
    font-size: 0.85rem;
  }
}

/* ================pop .rating-summary============================== */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure this is very high */
  backdrop-filter: blur(8px);
}

.modal-content {
  background: #1e293b; /* Dark theme background */
  padding: 40px;
  border-radius: 24px;
  width: 90%;
  max-width: 500px;
  position: relative;
  z-index: 10000;
}


/* Maintain your existing scroll animations below this */
/* =======================upload photo rating ============================= */
/* --- Photo Upload Styling --- */
.photo-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
}

.photo-label {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px dashed rgba(56, 189, 248, 0.3); /* Using your --accent color */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
}

.photo-label:hover {
  border-color: var(--accent);
  background: rgba(56, 189, 248, 0.05);
  transform: scale(1.05);
}

.upload-placeholder {
  text-align: center;
  color: #94a3b8;
}

.upload-placeholder span {
  font-size: 2rem;
  display: block;
  line-height: 1;
}

.upload-placeholder p {
  font-size: 0.7rem;
  margin-top: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.upload-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* --- Modal Input Styling --- */
.modal-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 14px 18px;
  border-radius: 12px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  outline: none;
}

.modal-input:focus {
  border-color: var(--accent);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.15);
}

.modal-input::placeholder {
  color: #64748b;
}

/* --- Modal Textarea Overwrite --- */
.modal-content textarea {
  width: 100%;
  height: 100px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
  font-family: 'Inter', sans-serif;
  resize: none;
  outline: none;
  transition: all 0.3s ease;
}

.modal-content textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.15);
}

/* --- Star Input Padding --- */
.star-input {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 10px 0;
}




/* --- Desktop Defaults (Keep your existing styles) --- */
/* The Dark Background Blur */


/* 1. The Overlay: This covers the whole screen */
/* This covers the screen and prevents the page from shifting */
/* Base Overlay - Stays the same to ensure it covers everything */
.modal-overlay-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75); 
  backdrop-filter: blur(6px);    
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;               
  pointer-events: auto;
}

/* Floating Card - Optimized for Medium Screens */
.popup-floating {
  position: relative;
  width: 90%;
  max-width: 420px; /* Slightly wider for medium screens */
  background: rgb(45, 45, 44); /* Deepened the dark theme slightly */
  padding: 35px 25px; /* Balanced padding */
  border-radius: 24px;
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.6);
  animation: gentle-float 4s ease-in-out infinite; /* Smoother, slower float */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border for definition */
}

/* Restored Floating Animation */
@keyframes gentle-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* --- MEDIUM MOBILE / TABLET VIEW (Responsive) --- */
@media (max-width: 768px) {
  .popup-floating {
    width: 80%; /* Takes up more width on medium devices */
    padding: 25px;
  }

  .popup-floating h2 {
    font-size: 1.5rem; /* Scales title for smaller height */
    margin-bottom: 10px;
    color: #fff;
  }

  .popup-floating p {
    font-size: 0.9rem;
    color: #cbd5e1;
    margin-bottom: 20px;
  }

  /* Optimize the Form Inputs for Touch */
  .booking-form input {
    font-size: 16px !important; /* Prevents auto-zoom on iPhones */
    padding: 14px !important;   /* Larger hit area for fingers */
    margin-bottom: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    border-radius: 12px;
  }

  .btn-submit {
    padding: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
}

/* --- SMALL MOBILE VIEW --- */
@media (max-width: 480px) {
  .popup-floating {
    width: 92%;
    padding: 20px;
  }
}

.close-popup-top {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  color: #64748b;
}