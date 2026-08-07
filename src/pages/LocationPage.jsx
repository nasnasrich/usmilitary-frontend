// LocationPage.jsx
import React from "react";
import "../pages/LocationPage.css";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LocationPage() {
  return (
    <div className="loc-page">
      <div className="loc-header">
        <h1>Our Location</h1>
        <p>Visit us or reach out — here's where you can find us.</p>
      </div>

      <div className="loc-content">
        <div className="loc-info">
          <div className="loc-item">
            <MapPin size={18} />
            <div>
                <h4>Address</h4>
                <p>1725 Massachusetts Avenue NW, Suite 310,<br />Washington, DC 20036</p>
            </div>
           </div>
          <div className="loc-item">
            <Clock size={18} />
            <div>
              <h4>Office Hours</h4>
              <p>Monday – Friday, 8:00 AM – 5:00 PM<br />Closed on Federal Holidays</p>
            </div>
          </div>

          <div className="loc-item">
            <Mail size={18} />
            <div>
              <h4>Email</h4>
              <p>mail@demosite.com</p>
            </div>
          </div>
        </div>

        <div className="loc-map">
          <iframe
  title="Office Location"
  src="https://www.google.com/maps?q=1725+Massachusetts+Avenue+NW+Suite+310+Washington+DC+20036&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
        </div>
      </div>
    </div>
  );
}