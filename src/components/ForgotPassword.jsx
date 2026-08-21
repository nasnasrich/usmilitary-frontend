import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Sending password reset email...");

    try {
      await axios.post(`${backendUrl}/api/auth/forgot-password`, {
        email,
      });

      toast.update(toastId, {
        render: "If this email exists, a password reset link has been sent.",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });

      setEmail("");
    } catch (err) {
      toast.update(toastId, {
        render:
          err.response?.data?.message ||
          "Unable to send password reset email.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <h2>Forgot Password?</h2>

        <p>
          Enter the email address associated with your account and
          we'll send you a password reset link.
        </p>

        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;