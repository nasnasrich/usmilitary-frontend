import { useState } from "react";
import "./Navbar.css";
import { Bolt, Bell, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
        </div>

     
    </nav>
  );
};

export default Navbar;
