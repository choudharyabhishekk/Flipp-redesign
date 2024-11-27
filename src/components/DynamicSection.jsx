import React, { useState } from "react";
import "../css/DynamicSection.css";
import Retailers from "../images/for-retailers.png";
import Brands from "../images/for-brands.png";
import Mediapartners from "../images/for-media-partners.png";
import { useNavigate } from "react-router-dom";

const DynamicSection = () => {
  // State for selected tab
  const [selectedTab, setSelectedTab] = useState("retailers");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/solutions");
  };
  // Content for each tab
  const tabContent = {
    retailers: {
      heading:
        "Full fidelity, shoppable experiences at scale to drive trips, baskets, vendor co-op and ROI",
      points: [
        "Showcase your full assortment with localized pricing & offers in an engaging, curated experience.",
        "Proven >25% store trip lift via Foursquare & 3rd party MMM/MTA ROI validated.",
        "Granular by SKU and store data to inform marketing and merchandising decisions.",
      ],
      image: Retailers,
    },
    brands: {
      heading:
        "Grow your brand by reaching highly engaged shoppers in buying mode",
      points: [
        "Target custom audiences based on 400B+ intent-based shopping signals.",
        "Unique access to over 1,600 retailers’ local offers and pricing in highly customizable ad experiences.",
        "Drive 103% lift in purchase intent and incremental 4:1 ROAS.",
      ],
      image: Brands,
    },
    media: {
      heading:
        "Maximize revenue growth and user engagement with exclusive access to high quality local shopping experiences",
      points: [
        "Driving sustainable, incremental yield and revenue.",
        "Enabling users to achieve shopping objectives onsite.",
        "Highly engaging, full fidelity experiences. 20 seconds average dwell time.",
      ],
      image: Mediapartners,
    },
  };

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
