import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./css/App.css";
import Solution from "./pages/Solution";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/company" element={<About />} />
        <Route path="/support" element={<Contact />} />
        <Route path="/solutions" element={<Solution />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
