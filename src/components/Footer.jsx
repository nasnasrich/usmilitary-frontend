import React from "react";
import "./Footer.css";

import {
  Star,
  MapPin,
  Phone,
  Printer,
  Mail,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const FOOTER_LINKS = [
  "HOME",
  "ABOUT",
  "INFORMATION",
  "BLOG",
  "GALLERY",
  "CONTACTS",
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <footer className="mf-footer">
      <div className="mf-footer-top">
        <div className="mf-footer-logo">
          <span className="mf-logo-badge">
            <Star
              size={16}
              strokeWidth={2}
              fill="#c0392b"
              color="#c0392b"
            />
          </span>

          <div className="mf-logo-text">
            <span className="mf-logo-title">MILITARY FORCE</span>
            <span className="mf-logo-sub">SAVING THE PEACE</span>
          </div>
        </div>

        <button className="mf-back-top" onClick={scrollToTop}>
          <ArrowUp size={16} /> BACK TO TOP
        </button>
      </div>

      <div className="mf-footer-grid">
        <div className="mf-footer-nav">
          {FOOTER_LINKS.map((link) => (
            <a href="#!" key={link}>
              {link}
            </a>
          ))}
        </div>

        <div className="mf-footer-block">
          <h5>LOCATION</h5>

          <p>
            <MapPin size={13} />
            8901 Marmora Road,
            <br />
            Glasgow, D04 89GR
          </p>

          <a href="#!" className="mf-map-link">
            Map
          </a>
        </div>

        <div className="mf-footer-block">
          <h5>CONTACTS</h5>

          <p>
            <Phone size={13} />
            Telephone: +1 800 123 1234
          </p>

          <p>
            <Printer size={13} />
            Fax: +1 800 123 1234
          </p>

          <p>
            <Mail size={13} />
            mail@demosite.com
          </p>
        </div>

        <div className="mf-footer-block">
          <h5>FOLLOW US</h5>

          <div className="mf-socials">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mf-footer-bottom">
        Copyright &copy; 2015, Military Force. All rights reserved.
      </div>
    </footer>
  );
}