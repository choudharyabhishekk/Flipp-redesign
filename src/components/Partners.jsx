import React from "react";
import "../css/Partners.css";

const logos = [
  "https://logo.clearbit.com/nestle.com?format=png", // Nestlé
  "https://logo.clearbit.com/keurig.com?format=png", // Keurig
  "https://logo.clearbit.com/mcdonalds.com?format=png", // McDonald's
  "https://logo.clearbit.com/jnj.com?format=png", // Johnson & Johnson
  "https://logo.clearbit.com/boursin.com?format=png", // Boursin
  "https://logo.clearbit.com/ferrerorocher.com?format=png", // Ferrero Rocher
  "https://logo.clearbit.com/starbucks.com?format=png", // Starbucks
  "https://logo.clearbit.com/costco.com?format=png", // Costco
  "https://logo.clearbit.com/drpepper.com?format=png", // Dr Pepper
  "https://logo.clearbit.com/campbellsoupcompany.com?format=png", // Campbell's
  "https://logo.clearbit.com/coca-colacompany.com?format=png", // Coca-Cola
];

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
