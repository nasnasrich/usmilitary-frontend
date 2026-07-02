import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AuthModal from "./pages/Authmodal"; 

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthModal />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;