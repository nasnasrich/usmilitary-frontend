import { useState } from "react";
import "./Navbar.css";
import { Bolt, Bell, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleEmergencyLeave = () => {
    if (window.confirm("Are you sure you want to apply for Emergency Leave?")) {
      alert("🚨 Emergency Leave request submitted!");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">⚡</div>
          <div className="logo-text">
            <span className="black">Emerg</span>
            <span className="red">Leave</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="nav-links">
          <a href="#">Dashboard</a>
          <a href="#">My Leaves</a>
          <a href="#">Apply Leave</a>
          <a href="#">History</a>
          <a href="#">Approvals</a>
        </div>

        {/* Right Side */}
        <div className="right-section">
          
          {/* Emergency Button */}
          <button className="emergency-btn" onClick={handleEmergencyLeave}>
            <Bolt size={18} />
            EMERGENCY
          </button>

          {/* Notification */}
          <div className="notification">
            <Bell size={20} />
            <span className="badge">3</span>
          </div>

          {/* Profile */}
          <div className="profile">
            <div className="profile-text">
              <p>John Doe</p>
              <span>EMP-3921</span>
            </div>
            <div className="avatar">JD</div>
          </div>

          {/* Mobile Toggle */}
          <button className="menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#">Dashboard</a>
          <a href="#">My Leaves</a>
          <a href="#">Apply Leave</a>
          <a href="#">History</a>
          <a href="#">Approvals</a>

          <button className="mobile-emergency" onClick={handleEmergencyLeave}>
            <Bolt size={20} />
            APPLY EMERGENCY LEAVE
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;