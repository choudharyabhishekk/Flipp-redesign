import React from "react";
import "../css/FlippPlatform.css";
import Video1 from "../videos/Image-1.mp4";
import Video2 from "../videos/Image-2.mp4";
import Video3 from "../videos/Image-3.mp4";
import { FaPaintBrush, FaCogs, FaFilter } from "react-icons/fa";

const FlippPlatform = () => {
  const cards = [
    {
      icon: <FaPaintBrush />,
      title: "Content Collection",
      description:
        "No lift required: transfer all of your merchandising and savings content from any source.",
      video: Video1,
    },
    {
      icon: <FaCogs />,
      title: "Curation",
      description:
        "Automatically curate rich and engaging digital merchandising experiences that help shoppers decide what and where to buy.",
      video: Video2,
    },
    {
      icon: <FaFilter />,
      title: "Distribution",
      description:
        "Distribute full fidelity shoppable experiences to over 100MM households, enhancing user engagement.",
      video: Video3,
    },
  ];

  return (
    <section className="flipp-platform">
      <div className="heading">
        <h4>The Flipp Platform</h4>
        <h2>
          We enable partners to move from ads to experiences <br /> through the
          Flipp Platform
        </h2>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            {/* Header and Description */}
            <div className="card-content">
              <div className="card-header">
                <div className="icon">{card.icon}</div>
                <h3>{card.title}</h3>
              </div>
              <p className="card-description">{card.description}</p>
            </div>
            {/* Video */}
            <div className="card-video">
              <video src={card.video} autoPlay loop muted playsInline />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlippPlatform;
