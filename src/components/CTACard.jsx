import React from "react";
import "../css/CTACard.css";

const CTACard = ({ title, subtitle, buttonText, imageSrc, onButtonClick }) => {
  return (
    <div className="grid-container">
      <div className="grid-left">
        <h5>{subtitle}</h5>
        <h2>{title}</h2>
        <button onClick={onButtonClick} className="cta-button">
          {buttonText}
        </button>
      </div>
      <div className="grid-right">
        <img src={imageSrc} alt="Call to action" />
      </div>
    </div>
  );
};

export default CTACard;
