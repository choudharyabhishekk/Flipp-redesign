import React from "react";
import "../css/Footer.css";
import logo from "../images/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Appstore from "../images/appstore.png";
import Playstore from "../images/playstore.png";

const Footer = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/support");
  };
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Flipp Logo" />
        </div>
        <div className="footer-app-links">
          <a
            href="https://play.google.com/store/apps/details?id=com.wishabi.flipp&pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Playstore} alt="Get it on Google Play" />
          </a>
          <a
            href="https://apps.apple.com/ca/app/flipp-flyers-shopping-deals/id725097967"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Appstore} alt="Download on the App Store" />
          </a>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/company">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Accessibility Plan</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li>
                <a href="#">Flipp Platform</a>
              </li>
              <li>
                <a href="#">For Retailers</a>
              </li>
              <li>
                <a href="#">For Brands</a>
              </li>
              <li>
                <a href="#">For Media Partners</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">Culture</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Early Talent</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="/support">Contact Us</a>
              </li>
              <li>
                <a href="#">Research and Insights</a>
              </li>
              <li>
                <a href="#">Conferences and Events</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <h4>Still have questions?</h4>
          <p>We would be happy to answer them.</p>
          <button onClick={handleClick}>Contact Us</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-media">
          <a
            href="https://www.facebook.com/getflipp"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/getflipp"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/flipp/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <p>
          Designed with by Group1 • &copy; {new Date().getFullYear()} Flipp
          Operations Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
