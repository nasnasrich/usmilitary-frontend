import { useState } from "react";
import { sendEmail } from "../services/mailController";
import "../pages/EmergencyLeave.css";

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
}; // <-- This closing brace was missing

5
  return (
    <div className="leave-container">
      <form className="leave-form" onSubmit={submitForm}>
        <h1>Leave Request</h1>

        <h3>Employee Information</h3>

        <input
          name="employeeName"
          placeholder="Employee Name"
          value={form.employeeName}
          onChange={handleChange}
        />

        <input
          name="employeeAddress"
          placeholder="Employee Address"
          value={form.employeeAddress}
          onChange={handleChange}
        />

        <input
          name="employeeId"
          placeholder="Employee ID"
          value={form.employeeId}
          onChange={handleChange}
        />

        <input
          name="currentLocation"
          placeholder="Current Location"
          value={form.currentLocation}
          onChange={handleChange}
        />

        <h3>Applicant Information</h3>

        <input
          name="applicantName"
          placeholder="Full Name"
          value={form.applicantName}
          onChange={handleChange}
        />

        <input
          name="applicantAddress"
          placeholder="Address"
          value={form.applicantAddress}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          rows="6"
          name="reason"
          placeholder="Reason for Leave"
          value={form.reason}
          onChange={handleChange}
        />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}
