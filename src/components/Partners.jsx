import React from "react";
import "../css/Partners.css";

import { logos } from "../data/data";

const Partners = () => {
  return (
    <section className="partners">
      <h4 className="subheading">Our Partners</h4>
      <h2 className="heading">
        Proud to work with North America's top companies
      </h2>
      <div className="logos">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            className="logo"
          />
        ))}
      </div>
      <button className="cta-button">Become a Partner</button>
    </section>
  );
};

export default Partners;
