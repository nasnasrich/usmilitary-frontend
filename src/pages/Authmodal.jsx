import { useState } from "react";
import "./AuthModal.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthModal() {
  const [activeTab, setActiveTab] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //signup handler

  const handleSignup = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        `${backendUrl}/api/auth/register`,
        signupData,
      );

      alert(res.data.message);

      setSignupData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
      });

      setActiveTab("login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  //login handler
  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(`${backendUrl}/api/auth/login`, loginData);

      alert("Login Successful");

      // Save token
      localStorage.setItem("token", res.data.token);

      // Save user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Navigate to dashboard
      navigate("/");

      console.log(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="bg-light"></div>

      <div className="auth-modal">
        {/* Toggle Buttons */}
        <div className="tabs">
          <button
            className={activeTab === "signup" ? "active" : ""}
            onClick={() => setActiveTab("signup")}
          >
            Sign up
          </button>

          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            Sign in
          </button>
        </div>

        {/* SIGNUP FORM */}
        {activeTab === "signup" && (
          <>
            <h2>Create an account</h2>

            <div className="name-row">
              <input
                type="text"
                placeholder="First Name"
                value={signupData.firstName}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    firstName: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                value={signupData.lastName}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    lastName: e.target.value,
                  })
                }
              />
            </div>

            <input
              type="email"
              placeholder="Enter your email"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  email: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={signupData.phoneNumber}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  phoneNumber: e.target.value,
                })
              }
            />

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    password: e.target.value,
                  })
                }
              />

              <button
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              className="submit-btn"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create an account"}
            </button>
          </>
        )}

        {/* LOGIN FORM */}
        {activeTab === "login" && (
          <>
            <h2>Welcome Back</h2>

            <input
              type="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                })
              }
            />

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
              />

              <button
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="remember">
              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="/">Forgot Password?</a>
            </div>

            <button
              className="submit-btn"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </>
        )}

        <div className="divider">OR CONTINUE WITH</div>

        <div className="social-buttons">
          <button>
            <FcGoogle size={22} />
          </button>

          <button>
            <FaApple size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
