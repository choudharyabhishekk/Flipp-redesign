import React, { useState } from "react";
import "../css/DynamicSection.css";
import { useNavigate } from "react-router-dom";
import { tabContent } from "../data/data";
const DynamicSection = () => {
  // State for selected tab
  const [selectedTab, setSelectedTab] = useState("retailers");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/solutions");
  };
  // Content for each tab

  const { heading, points, image } = tabContent[selectedTab];

  return (
    <section className="dynamic-section">
      <div className="tab-buttons">
        <button
          className={`tab-button ${
            selectedTab === "retailers" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("retailers")}
        >
          For Retailers
        </button>
        <button
          className={`tab-button ${selectedTab === "brands" ? "active" : ""}`}
          onClick={() => setSelectedTab("brands")}
        >
          For Brands
        </button>
        <button
          className={`tab-button ${selectedTab === "media" ? "active" : ""}`}
          onClick={() => setSelectedTab("media")}
        >
          For Media Partners
        </button>
      </div>

      <div className="content">
        <div className="text-content">
          <h2>{heading}</h2>
          <ul>
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <button onClick={handleClick} className="learn-more">
            Learn more about our solutions
          </button>
        </div>
        <div className="image-content">
          <img src={image} alt={selectedTab} />
        </div>
      </div>
    </section>
  );
};

export default DynamicSection;
