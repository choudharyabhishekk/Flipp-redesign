import React from "react";
import "../css/HeroSection.css";
import HeroVideo from "../images/hero.mp4";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/support");
  };
  const handleSolutionClick = () => {
    navigate("/solutions");
  };
  return (
    <section className="hero-section">
      {/* Video Background */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        src={HeroVideo}
        type="video/mp4"
      />

      {/* Content Overlay */}
      <div className="hero-content">
        <h1>Reach 100 million high intent shoppers with experiences not ads</h1>
        <div className="hero-buttons">
          <button onClick={handleContactClick} className="btn btn-primary">
            Contact Us
          </button>
          <button onClick={handleSolutionClick} className="btn btn-secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
