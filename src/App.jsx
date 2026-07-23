import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Navbar";
import Home from "./components/Home";
import MilitaryForceSite from "./components/MilitaryForceSite";
import Footer from "./components/Footer";
import AuthModal from "./pages/Authmodal";
import Application from "../src/components/Application";
import EmergencyLeave from "../src/pages/EmergencyLeave";
import AboutUs from "./pages/AboutUs";
import NewsArchive from "./pages/NewsArchive";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <ScrollToTop />

      <main className="page-content">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<MilitaryForceSite />} />
          <Route path="/auth" element={<AuthModal />} />
          <Route path="/Application" element={<Application />} />
          <Route path="/EmergencyLeave" element={<EmergencyLeave />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/NewsArchive" element={<NewsArchive />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;