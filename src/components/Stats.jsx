import React from "react";
import "../css/Stats.css";
import stat1 from "../images/stat1.jpg";
import stat2 from "../images/stat2.png";
import { stats, demographics } from "../data/data";

const Stats = () => {
  return (
    <section className="apple-style-section">
      <div className="apple-grid">
        <div className="apple-left">
          <div className="image-container large-image">
            <img src={stat1} alt="Shopping with Flipp" />
          </div>
        </div>
        <div className="apple-right">
          <h2>
            100 million shoppers trust Flipp to help them make smarter decisions
          </h2>
          <div className="highlight">
            <span className="highlight-circle">97%</span>
            <p>
              of Flipp's user base identifies as the head of household shopper
              and decision maker.
            </p>
          </div>
          <div className="demographics">
            {demographics.map((item, index) => (
              <div key={index} className="demographic-card">
                <span className="icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <span className="percentage">{stat.percentage}</span>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
