import React, { useState } from "react";
import "../css/FAQ.css";
import { faqs } from "../data/data";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="header-faq">
        <h4>Support</h4>
        <h2>Frequently Asked Questions</h2>
        <p>
          Discover quick answers to some of our most commonly asked questions.
          Need more details? Our team is here to help.
        </p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h4>{faq.question}</h4>
              <span className="toggle-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
