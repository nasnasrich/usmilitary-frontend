import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

import Navbar from "./Navbar";
import MilitaryForceSite from "./components/MilitaryForceSite";
import Footer from "./components/Footer";
import AuthModal from "./pages/Authmodal";
import EmergencyLeave from "./pages/EmergencyLeave";
import AboutUs from "./pages/AboutUs";
import NewsArchive from "./pages/NewsArchive";
import ScrollToTop from "./ScrollToTop";
import LocationPage from "./pages/LocationPage";

import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <ScrollToTop />

      <main className="page-content">
        <Routes>
          <Route
            path="/sso-callback"
            element={<AuthenticateWithRedirectCallback />}
          />

          <Route path="/" element={<MilitaryForceSite />} />
          <Route path="/auth" element={<AuthModal />} />
          <Route path="/EmergencyLeave" element={<EmergencyLeave />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/NewsArchive" element={<NewsArchive />} />
          <Route path="/LocationPage" element={<LocationPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />}
/>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
