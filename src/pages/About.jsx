import React from "react";
import "../css/About.css";
import leader1 from "../images/leader1.jpg";
import leader2 from "../images/leader2.jpg";
import leader3 from "../images/leader3.jpg";
import leader4 from "../images/leader4.png";

const About = () => {
  const leaders = [
    {
      name: "Adam Halim",
      role: "Sr. Vice President, Product and Marketing",
      quote: "Innovating for a smarter shopping experience.",
      image: leader1,
    },
    {
      name: "Garrett Royds",
      role: "Sr. Vice President, Business Development",
      quote: "Building partnerships that benefit everyone.",
      image: leader2,
    },
    {
      name: "Nafisa Syed",
      role: "Chief Revenue Officer",
      quote: "Driving growth through customer-centric strategies.",
      image: leader3,
    },
    {
      name: "David Au-Yeung",
      role: "Chief Technology Officer",
      quote: "Leveraging technology to revolutionize retail.",
      image: leader4,
    },
  ];

  return (
    <div className="about-us">
      <header className="hero">
        <h1>About Flipp</h1>
        <p>Empowering smart shopping decisions since 2007</p>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Flipp, we're dedicated to helping shoppers make smarter purchasing
          decisions. By providing innovative tools and technologies, we connect
          consumers with the best deals from their favorite retailers and
          brands.
        </p>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Innovation</h3>
            <p>
              We constantly push boundaries to create cutting-edge solutions.
            </p>
          </div>
          <div className="value-item">
            <h3>Integrity</h3>
            <p>We operate with honesty and transparency in all our dealings.</p>
          </div>
          <div className="value-item">
            <h3>Customer Focus</h3>
            <p>Our users' needs drive every decision we make.</p>
          </div>
          <div className="value-item">
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork and partnership.</p>
          </div>
        </div>
      </section>

      <section className="leadership">
        <h2>Leadership Excellence</h2>
        <div className="leader-grid">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card">
              <img src={leader.image} alt={leader.name} />
              <h3>{leader.name}</h3>
              <p className="role">{leader.role}</p>
              <p className="quote">"{leader.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Join the Flipp Family</h2>
        <p>Discover how we can help your business grow in the digital age.</p>
        <button className="cta-button">Partner with Us</button>
      </section>
    </div>
  );
};

export default About;
