import { useState } from "react";
import { sendEmail } from "../services/mailController";
import "../pages/EmergencyLeave.css";
import {
  ShieldCheck,
  ClipboardList,
  Send,
  User,
  MapPin,
  IdCard,
  Phone,
  Mail,
  FileText,
  BadgeCheck,
} from "lucide-react";

export default function EmergencyLeave() {
  const [form, setForm] = useState({
    employeeName: "",
    employeeAddress: "",
    employeeId: "",
    currentLocation: "",
    applicantName: "",
    applicantAddress: "",
    phone: "",
    email: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await sendEmail("template_rxlvgi7", form);
      await sendEmail("template_cm1ca9s", form);
      alert("Your emergency leave application has been submitted successfully.");
      setForm({
        employeeName: "",
        employeeAddress: "",
        employeeId: "",
        currentLocation: "",
        applicantName: "",
        applicantAddress: "",
        phone: "",
        email: "",
        reason: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert(
        `Status: ${err.status || "Unknown"}\nMessage: ${
          err.text || err.message || "Unknown error"
        }`
      );
    }
  };

  return (
    <div className="el-page">
      {/* ===== HERO ===== */}
      <section className="el-hero">
        <div className="el-hero-inner">
          <span className="el-hero-badge">
            <ShieldCheck size={22} />
          </span>
          <h1>
            EMERGENCY LEAVE <span>REQUEST</span>
          </h1>
          <p className="el-hero-sub">SERVING THOSE WHO SERVE</p>
          <p className="el-hero-text">
            When duty calls you home unexpectedly, we make sure the process
            doesn't slow you down. This form routes your emergency leave
            request directly to your unit and the leave office, so approvals
            happen fast and you can focus on what matters — getting there.
          </p>
          <a href="#el-form" className="el-btn el-btn--primary">
            START YOUR REQUEST
          </a>
        </div>
      </section>

      {/* ===== PROCESS STRIP ===== */}
      <section className="el-process">
        <div className="el-process-inner">
          <div className="el-process-item">
            <span className="el-process-num">1</span>
            <div>
              <h5>FILL THE FORM</h5>
              <p>Provide accurate employee and applicant details below.</p>
            </div>
          </div>
          <div className="el-process-item">
            <span className="el-process-num">2</span>
            <div>
              <h5>AUTOMATIC ROUTING</h5>
              <p>Your request is emailed instantly to command and records.</p>
            </div>
          </div>
          <div className="el-process-item">
            <span className="el-process-num">3</span>
            <div>
              <h5>REVIEW &amp; APPROVAL</h5>
              <p>Your unit reviews and confirms your leave status directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORM CARD ===== */}
      <section className="el-form-section" id="el-form">
        <div className="el-form-intro">
          <span className="el-rule" />
          <h2>SUBMIT YOUR APPLICATION</h2>
          <span className="el-rule" />
        </div>
        <p className="el-form-lede">
          Complete every field below with care. Incomplete or inaccurate
          information may delay processing of your emergency leave.
        </p>

        <form className="el-form-card" onSubmit={submitForm}>
          <div className="el-form-col">
            <h3>
              <IdCard size={16} /> Employee Information
            </h3>

            <label className="el-field">
              <span>Employee Name</span>
              <div className="el-input-wrap">
                <User size={15} />
                <input
                  name="employeeName"
                  placeholder="Employee Name"
                  value={form.employeeName}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label className="el-field">
              <span>Employee Address</span>
              <div className="el-input-wrap">
                <MapPin size={15} />
                <input
                  name="employeeAddress"
                  placeholder="Employee Address"
                  value={form.employeeAddress}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label className="el-field">
              <span>Employee ID</span>
              <div className="el-input-wrap">
                <IdCard size={15} />
                <input
                  name="employeeId"
                  placeholder="Employee ID"
                  value={form.employeeId}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label className="el-field">
              <span>Current Location</span>
              <div className="el-input-wrap">
                <MapPin size={15} />
                <input
                  name="currentLocation"
                  placeholder="Current Location"
                  value={form.currentLocation}
                  onChange={handleChange}
                />
              </div>
            </label>
          </div>

          <div className="el-form-col">
            <h3>
              <BadgeCheck size={16} /> Applicant Information
            </h3>

            <label className="el-field">
              <span>Full Name</span>
              <div className="el-input-wrap">
                <User size={15} />
                <input
                  name="applicantName"
                  placeholder="Full Name"
                  value={form.applicantName}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label className="el-field">
              <span>Address</span>
              <div className="el-input-wrap">
                <MapPin size={15} />
                <input
                  name="applicantAddress"
                  placeholder="Address"
                  value={form.applicantAddress}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label className="el-field">
              <span>Mobile Number</span>
              <div className="el-input-wrap">
                <Phone size={15} />
                <input
                  name="phone"
                  placeholder="Mobile Number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label className="el-field">
              <span>Email Address</span>
              <div className="el-input-wrap">
                <Mail size={15} />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label className="el-field el-field--full">
              <span>
                <FileText size={14} /> Reason for Leave
              </span>
              <textarea
                rows="6"
                name="reason"
                placeholder="Reason for Leave"
                value={form.reason}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className="el-btn el-btn--submit">
              <Send size={15} /> SUBMIT REQUEST
            </button>
          </div>
        </form>
      </section>

      {/* ===== FOOTER NOTE ===== */}
      <section className="el-footnote">
        <ClipboardList size={16} />
        <p>
          For time-critical emergencies, follow up with your unit's leave
          office directly after submitting this form. All requests are
          logged and reviewed in the order received.
        </p>
      </section>
    </div>
  );
}