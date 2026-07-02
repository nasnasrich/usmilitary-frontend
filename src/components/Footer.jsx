import "./Footer.css";
import { Mail, Globe, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">
              <span className="black">Emerg</span>
              <span className="red">Leave</span>
            </span>
          </div>
          <p>
            Fast and reliable emergency leave management system for employees and organizations.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div>
            <h4>Features</h4>
            <a href="#">Dashboard</a>
            <a href="#">Leave Requests</a>
            <a href="#">Approvals</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get updates and important alerts.</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>
              <Mail size={18} />
            </button>
          </div>

          {/* Socials */}
          <div className="socials">
  <Globe size={18} />
  <Send size={18} />
  <Mail size={18} />
</div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EmergLeave. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;