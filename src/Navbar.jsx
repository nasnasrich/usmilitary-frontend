import React from "react";
import { Star } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="mf-header">
              <div className="mf-header-inner">
                <div className="mf-logo">
                  <span className="mf-logo-badge">
                    <Star size={16} strokeWidth={2} fill="#c0392b" color="#c0392b" />
                  </span>
                  <div className="mf-logo-text">
                    <span className="mf-logo-title">MILITARY FORCE</span>
                    <span className="mf-logo-sub">SAVING THE PEACE</span>
                  </div>
                </div>
                {/* <nav className="mf-nav">
                  {NAV_LINKS.map((link) => (
                    <div className="mf-nav-item" key={link.label}>
                      <button
                        className={
                          "mf-nav-link" +
                          (link.dropdown ? " mf-nav-link--has-drop" : "")
                        }
                      >
                        {link.label}
                      </button>
                      {link.dropdown && (
                        <div className="mf-dropdown">
                          {link.dropdown.map((item) => (
                            <a href="#!" className="mf-dropdown-item" key={item}>
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav> */}
              </div>
    </header>




  );
}