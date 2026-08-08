import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
  { label: "HOME", path: "/", type: "route" },
  { label: "ABOUT", path: "/AboutUS", type: "route" },
  { label: "NEWS", path: "/NewsArchive", type: "route" },
  { label: "CONTACTS", path: "mailto:troopportal@gmail.com", type: "mail" },
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
        {/* <div className="mf-footer-nav">
          {FOOTER_LINKS.map((link) =>
            link.type === "mail" ? (
              <a href={link.path} key={link.label}>
                {link.label}
              </a>
            ) : (
              <Link to={link.path} key={link.label}>
                {link.label}
              </Link>
            )
          )}
        </div> */}

        <div className="mf-footer-block">
           {/* <h3>Home</h3>
           <h3>ABOUT</h3>
           <h3>NEWS</h3>
           <h3>CONTACTS</h3> */}

            <div className="mf-footer-nav">
          {FOOTER_LINKS.map((link) =>
            link.type === "mail" ? (
              <a href={link.path} key={link.label}>
                {link.label}
              </a>
            ) : (
              <Link to={link.path} key={link.label}>
                {link.label}
              </Link>
            )
          )}
        </div>
        </div>

        <div className="mf-footer-block">
          <h5>LOCATION</h5>

           <p>
            <MapPin size={13} />
            1725 Massachusetts Avenue  NW, Suite 310,
            <br />
            Washington, DC 20036
          </p>
          <Link to="/LocationPage" className="mf-map-link">
            Map
          </Link>
        </div>

        <div className="mf-footer-block">
        <h5>CONTACTS</h5>

        <p>
          <Mail size={13} />
          info@troopportal.com
        </p>

        <a href="mailto:troopportal@gmail.com?subject=Inquiry from US Leave Portal" className="mf-map-link">
         Send a Message
      </a>
      </div>

        {/* <div className="mf-footer-block">
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
        </div> */}

        <div className="mf-footer-block">
          <h5>OFFICE HOURS</h5>
          <p>Monday - Friday</p>
          <p>8:00 AM - 5:00 PM</p>
          <p>Closed on Federal Holidays</p>
        </div>
      </div>

      <div className="mf-footer-bottom">
        <p>2026 US Leave Portal. All rights reserved.</p>
      </div>
    </footer>
  );
}