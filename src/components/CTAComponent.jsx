import React from "react";
import "../css/CTAComponent.css";

const CTAComponent = ({ subheading, title, description, image }) => {
  return (
    <div className="reach-component">
      <div className="text-section">
        <h5 className="subheading">{subheading}</h5>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
      <div className="image-section">
        <img src={image} alt="Reach visual representation" />
      </div>
    </div>
  );
};

export default CTAComponent;
