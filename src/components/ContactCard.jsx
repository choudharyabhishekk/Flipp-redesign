import React from "react";
import "../css/ContactCard.css";
import CTAImage from "../images/contact.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="contact-card">
      {/* Image Section */}
      <div className="contact-card-image">
        <img src={CTAImage} alt="Flipp Office" />
      </div>

      {/* Text and Social Section */}
      <div className="contact-card-info">
        <h2>Contact Us</h2>
        <p>
          350 – 3250 Bloor St W, East Tower,
          <br />
          Etobicoke, ON, M8X 2X9, CA
        </p>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
