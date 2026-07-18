import "./Footer.css";
import { Mail, Globe, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="ef-footer">
      <div className="ef-footer-container">

        {/* Brand */}
        <div className="ef-footer-brand">
          <div className="ef-footer-logo">
            <span className="ef-logo-icon">⚡</span>
            <span className="ef-logo-text">
              <span className="black">Emerg</span>
              <span className="red">Leave</span>
            </span>
          </div>

          <p>
            Fast and reliable emergency leave management system for employees
            and organizations.
          </p>
        </div>

        {/* Links */}
        <div className="ef-footer-links">
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
        <div className="ef-footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get updates and important alerts.</p>

          <div className="ef-newsletter-box">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              <Mail size={18} />
            </button>
          </div>

          {/* Social Icons */}
          <div className="ef-socials">
            <Globe size={18} />
            <Send size={18} />
            <Mail size={18} />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="ef-footer-bottom">
        <p>
          © {new Date().getFullYear()} EmergLeave. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;