import { useState, useEffect } from "react";
import "./Authmodal.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import { useSignIn, useUser, useClerk } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

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

    const toastId = toast.loading("Creating your account...");

    try {
      const res = await axios.post(
        `${backendUrl}/api/auth/register`,
        signupData,
      );

      toast.update(toastId, {
        render: "Account created successfully!",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });

      setSignupData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
      });

      setActiveTab("login");
    } catch (err) {
      toast.update(toastId, {
        render: err.response?.data?.message || "Registration failed",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  //login handler

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const toastId = toast.loading("Signing you in...");

    try {
      const res = await axios.post(`${backendUrl}/api/auth/login`, loginData);

      toast.update(toastId, {
        render: "Login successful!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      // Save token
      localStorage.setItem("token", res.data.token);

      // Save user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Navigate to dashboard
      navigate("/EmergencyLeave");

      console.log(res.data);
    } catch (err) {
      toast.update(toastId, {
        render: err.response?.data?.message || "Login failed",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const { signIn } = useSignIn();
  const { loaded } = useClerk();
  const { isSignedIn } = useUser();
  
  useEffect(() => {
  if (isSignedIn) {
    navigate("/EmergencyLeave");
  }
}, [isSignedIn, navigate]);

 const signInWithGoogle = async () => {
  if (!loaded || !signIn) return;

  try {
    await signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/EmergencyLeave",
    });
  } catch (err) {
    console.error("Google Error:", err);

    toast.error(
      err.errors?.[0]?.longMessage ||
      err.message ||
      "Google sign in failed"
    );
  }
};

  const signInWithApple = async () => {
  if (!loaded || !signIn) return;

  try {
    await signIn.authenticateWithRedirect({
      strategy: "oauth_apple",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/EmergencyLeave",
    });
  } catch (err) {
    console.error("Apple Error:", err);

    toast.error(
      err.errors?.[0]?.longMessage ||
      err.message ||
      "Apple sign in failed"
    );
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
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Creating...
                </>
              ) : (
                "Create an account"
              )}
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
              {/* <label style={{textDecoration:"underline"}}>
                <input type="checkbox" />
                Remember me
              </label> */}

              <Link
                  to="/forgot-password"
                  style={{ textDecoration: "underline" }}
                >
                  Forgot Password?
                </Link>
            </div>

            <button
              className="submit-btn"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </>
        )}

        <div className="divider">OR CONTINUE WITH</div>
         
         <div className="social-buttons">
          <button onClick={signInWithGoogle} disabled={!loaded}>
            <FcGoogle size={22} />
          </button>

          <button onClick={signInWithApple} disabled={!loaded}>
            <FaApple size={22} />
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default AuthModal;
