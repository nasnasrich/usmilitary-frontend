import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AuthModal from "./pages/Authmodal"; 
import Application from "../src/components/Application"; 
import EmergencyLeave from "../src/pages/EmergencyLeave"; 

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/auth" element={<AuthModal />} />
          <Route path="/Application" element={<Application />} /> 
          <Route path="/EmergencyLeave" element={<EmergencyLeave />} /> 
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;