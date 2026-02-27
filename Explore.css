/* Explore.css */

.explore-section {
  padding: 80px 20px;
   background: #05070a; /* Deep space black */
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.1), transparent),
    url('https://www.transparenttextures.com/patterns/stardust.png'); /* Optional stars */
  max-width: 1200px;
  margin: 0 auto;
   overflow: hidden;
}   

/* Back Button */
.back-home-btn {
  background: none;
  border: none;
  color: #06f1f1;
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s;
}

.back-home-btn:hover {
  color: #0c0c0c;
}

/* Header Styling */
.explore-header {
  text-align: center;
  margin-bottom: 3rem;
}

.badge-accent {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #a777e3;
  display: block;
  margin-bottom: 10px;
}

.explore-header h2 {
  font-size: 2.5rem;
  margin: 0;
  font-weight: 800;
  color: #eff0f3;
}

.header-line {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #6e8efb, #a777e3);
  margin: 15px auto;
  border-radius: 2px;
}

/* Grid Layout - Mobile First */
.explore-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column on mobile */
  gap: 25px;
}

/* Card Styling */
.explore-card {
    background-image: 
    radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.1), transparent),
    url('https://www.transparenttextures.com/patterns/stardust.png'); /* Optional stars */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.explore-img-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.explore-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-tag {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(238, 59, 4, 0.9);
  padding: 6px 12px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
}

.explore-details {
  padding: 20px;
}

.explore-details h3 {
  margin: 0 0 8px 0;
  font-size: 1.25rem;
}

.explore-details p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

/* CTA Button */
.explore-cta {
  width: 100%;
  padding: 12px;
  border: none;
  background: #03a4ef;
  border-radius: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-cta:hover {
  background: #6505d3;
  color: #fff;
}

/* --- PREFERENCE: Center Overall Rating Display --- */
.rating-container {
  display: flex;
  justify-content: center; /* Centered display */
  align-items: center;
  margin: 10px 0;
  font-weight: bold;
  color: #ffb400; /* Gold color for stars/rating */
}

/* Desktop Media Query */
@media (min-width: 768px) {
  .explore-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on desktop */
  }
  
  .explore-header h2 {
    font-size: 3rem;
  }
  
  .explore-card:hover {
    transform: translateY(-10px);
  }
}

/* Ensure the wrapper hides the image as it expands */
.explore-img-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden; /* Critical for the zoom effect */
  border-radius: 20px 20px 0 0; /* Matches top of card */
}

.explore-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Smooth transition for the transform property */
  transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1); 
}

/* Zoom effect when the parent card is hovered */
.explore-card:hover .explore-img-wrapper img {
  transform: scale(1.1);
}

/* Optional: Add a slight dark overlay on hover to make the tag pop more */
.explore-img-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: background 0.4s ease;
}

.explore-card:hover .explore-img-wrapper::after {
  background: rgba(0, 0, 0, 0.1); /* Very subtle dimming */
}