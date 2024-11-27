import React, { useState } from "react";
import "../css/Contact.css";
import CTAImage from "../images/contact.png";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("Retailers");

  const tabs = [
    "Retailers",
    "Brands",
    "Media Partners",
    "Careers",
    "Customer Feedback",
  ];

  const renderAdditionalContent = () => {
    switch (activeTab) {
      case "Retailers":
        return <p>Contact us to become a retailer partner.</p>;
      case "Brands":
        return <p>Contact us to collaborate with our brand team.</p>;
      case "Media Partners":
        return <p>Let's discuss media partnership opportunities.</p>;
      case "Careers":
        return <p>Join our team! Check out our current openings.</p>;
      case "Customer Feedback":
        return <p>We value your feedback. Let us know how we can improve!</p>;
      default:
        return null;
    }
  };

  const renderForm = () => (
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name *</label>
        <input type="text" id="lastName" name="lastName" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="(123) 456-7890"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="companyName">Company Name *</label>
        <input type="text" id="companyName" name="companyName" required />
      </div>
      <div className="form-group">
        <label htmlFor="storeLocations">Number of Store Locations *</label>
        <input
          type="number"
          id="storeLocations"
          name="storeLocations"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="companyWebsite">Company Website</label>
        <input
          type="url"
          id="companyWebsite"
          name="companyWebsite"
          placeholder="www.your-company.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="reason">Reason for Inquiry</label>
        <textarea id="reason" name="reason"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="howHeard">How did you hear about us? *</label>
        <select id="howHeard" name="howHeard" required>
          <option value="">Select One</option>
          <option value="Referral">Referral</option>
          <option value="Advertisement">Advertisement</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );

  return (
    <>
      <ContactCard />
      <div className="contact-container">
        <h3>
          Looking to become a partner, or need other support? Select the nature
          of your inquiry below.
        </h3>
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <div className="additional-content">{renderAdditionalContent()}</div>
          {renderForm()}
        </div>
      </div>
    </>
  );
};

export default Contact;
