:root {
  --admin-bg: #040404;
  --glass-bg: rgba(25, 25, 25, 0.7); /* Darker glass for deep background */
  --accent-blue: #3b82f6;
  --accent-purple: #8b5cf6;
  --text-bright: #f8fafc;
  --text-dim: #94a3b8;
  --border-glass: rgba(255, 255, 255, 0.1);
  
  --success-green: #10b981;

  --glass-bg: rgba(255, 255, 255, 0.03);
  --border-glass: rgba(255, 255, 255, 0.08);
}

.admin-body {
  background-color: var(--admin-bg);
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 40%);
  min-height: 100vh;
  padding: 2.5rem;
  color: var(--text-bright);
  font-family: 'Inter', system-ui, sans-serif;
}

/* Header */
.admin-title {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(to right, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ========================================Stats Grid - Automatically adjusts boxes ========================*/
.admin-stats-grid {
  display: grid;
  /* Auto-fit handles mobile/desktop switching automatically */
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.stat-box {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-glass);
  border-radius: 24px;
  padding: 1.8rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  /* Inner glow effect */
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
}

/* Hover State: Intense glow and lift */
.stat-box:hover {
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 
    0 20px 40px -15px rgba(0, 0, 0, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);
}

.stat-box p {
  color: var(--text-dim);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
}

.stat-box h2 {
  font-size: 2.5rem; /* Larger, bolder font */
  font-weight: 800;
  margin: 0.2rem 0 0 0;
  letter-spacing: -1.5px;
  background: linear-gradient(to bottom, #ffffff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Icon Wrappers: Added a soft neon glow */
.stat-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  transition: transform 0.3s ease;
}

.stat-box:hover .stat-icon-wrapper {
  transform: scale(1.1) rotate(-5deg);
}

.stat-icon-wrapper.blue { 
  background: rgba(59, 130, 246, 0.15); 
  color: #60a5fa;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
}

.stat-icon-wrapper.green { 
  background: rgba(16, 185, 129, 0.15); 
  color: #34d399;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.1);
}

/* Responsive tweak for small mobile phones */
@media (max-width: 480px) {
  .stat-box h2 {
    font-size: 2rem;
  }
  .admin-stats-grid {
    gap: 1rem;
  }
}

/* Glow Effect for Stats */
.stat-box::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

/* Table Card */
.admin-card {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-glass);
  border-radius: 24px;
  padding: 2rem;
}

.admin-table {
  width: 100%;
  border-spacing: 0 12px;
}

.admin-table th {
  color: var(--text-dim);
  text-align: left;
  padding: 0 1rem;
}

.admin-table tbody tr {
  background: rgba(255, 255, 255, 0.03);
  transition: background 0.3s;
}

.admin-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.07);
}

.admin-table td {
  padding: 1.2rem 1rem;
  border: none;
}

.admin-table td:first-child { border-radius: 12px 0 0 12px; }
.admin-table td:last-child { border-radius: 0 12px 12px 0; }

.status-badge {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
}


/* ==============Timer ================== */
/* Clock Styling */
.real-time-clock {
  text-align: right;
  
  font-family: 'JetBrains Mono', monospace; /* Use a monospace font for clocks if possible */
}

.clock-time {
  display: block;
  font-size: 1.4rem;
  right: 300px;
  font-weight: 700;
  color: #1de40b;
  letter-spacing: 1px;
}

.clock-date {
  font-size: 0.75rem;
  color: var(--text-dim);
  text-transform: uppercase;
}

/* Pulse Animation */
.live-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(16, 185, 129, 0.1);
  padding: 6px 10px;
  border-radius: 20px;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
  animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
  0% { box-shadow: 0 0 0 0px rgba(16, 185, 129, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0px rgba(16, 185, 129, 0); }
}
.live-text {
  font-size: 0.7rem;
  font-weight: 800;
  color: #10b981;
  letter-spacing: 1px;
}

/* Stat Icon Wrappers */
.stat-icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}
.stat-icon-wrapper.blue { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }
.stat-icon-wrapper.green { background: rgba(16, 185, 129, 0.2); color: #10b981; }
.stat-icon-wrapper.purple { background: rgba(139, 92, 246, 0.2); color: #8b5cf6; }

.stat-trend.up { color: #10b981; font-size: 0.8rem; font-weight: 600; }



/* =================BackBTN===================
 */

 .back-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  background: rgba(255, 255, 255, 0.03); /* Very subtle white tint */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #94a3b8; /* Muted slate color */
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--accent-blue); /* Glowing blue border on hover */
  color: #fff; /* Text turns bright white */
  transform: translateX(-4px); /* Subtle slide effect indicating "Back" */
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
}

.back-btn svg {
  transition: transform 0.3s ease;
}

.back-btn:hover svg {
  transform: translateX(-2px); /* Icon moves slightly to the left */
  color: var(--accent-blue);
}

/* ===========booking customer================== */

/* Layout for the Chart and Table side-by-side or stacked */
.admin-grid-layout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
  color: var(--text-bright);
}

.user-email {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.dest-info {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--accent-blue);
  font-size: 0.9rem;
}

/* Status Badge Variations */
.status-badge.paid {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.status-badge.pending {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.view-all {
  font-size: 0.8rem;
  color: var(--accent-blue);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
}



/* auto refresher */

.refresh-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.3s;
}

.refresh-btn:hover { background: rgba(255, 255, 255, 0.15); }

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loading-text {
  font-size: 0.8rem;
  color: var(--accent-blue);
  animation: pulse 1.5s infinite;
}

.error-message {
  color: #ff4d4d;
  padding: 1rem;
  background: rgba(255, 77, 77, 0.1);
  border-radius: 8px;
  text-align: center;
}


/* =======================upload img================== */
/* Container for the whole Admin View */
.admin-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
}

.admin-container h2 {
  color: #1e293b;
  font-size: 2rem;
  margin-bottom: 25px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

/* The Form Box */
.admin-form {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Stylish Inputs */
.admin-form input {
  padding: 14px 18px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  color: #334155;
}

.admin-form input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
  transform: translateY(-2px);
}

.admin-form input::placeholder {
  color: #94a3b8;
}

/* The Submit Button */
.btn-primary {
  background: #2563eb;
  color: white;
  padding: 16px;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
}   

.btn-primary:active {
  transform: translateY(0);
}