import React from "react";
import "../css/Research.css";
import ResearchBanner from "../images/State-of-Grocery-Report-2024-Web-EN.jpg";

const Research = () => {
  const statistics = [
    {
      value: "54%",
      text: "Over half of flyer readership is now only/majorly digital.",
    },
    { value: "83%", text: "Of shoppers are checking prices before shopping." },
    {
      value: "$147",
      text: "Is the average amount shoppers are spending on groceries each week.",
    },
  ];

  const reports = [
    {
      country: "CANADA",
      title: "State of Grocery Report 2024",
      description: "November, 2024",
      downloadText: "Download this report",
      image: ResearchBanner,
    },
    {
      country: "CANADA",
      title: "Le rapport 2024 sur l'état de l'épicerie",
      description: "November, 2024",
      downloadText: "Download this report",
      image: ResearchBanner,
    },
  ];

  return (
    <section className="research-insights">
      <div className="header">
        <h4>Resources</h4>
        <h2>Research & Insights</h2>
        <p>
          Get to know shoppers on a deeper level. Leverage Flipp’s thought
          leadership insights.
        </p>
      </div>

      <div className="content">
        <div className="stats">
          {statistics.map((stat, index) => (
            <div className="my-stat-card" key={index}>
              <h3>{stat.value}</h3>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
        <div className="reports">
          {reports.map((report, index) => (
            <div className="report-card" key={index}>
              <div className="report-image">
                <img src={report.image} alt={report.title} />
                <span className="badge">{report.country}</span>
              </div>
              <div className="report-content">
                <h4>{report.title}</h4>
                <p>{report.description}</p>
                <a
                  href="https://corp.flipp.com/resources/state-of-grocery-2024-ca/"
                  target="_blank"
                  className="download-link"
                >
                  {report.downloadText} <span>&#x2192;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
