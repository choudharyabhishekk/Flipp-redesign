import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../css/Navbar.css";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleBtnClick = () => {
    navigate("/support");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      {/* Desktop Menu */}
      <div className="desktop-menu">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link
              to="/"
              className={`navbar-item ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/solutions"
              className={`navbar-item ${
                isActive("/solutions") ? "active" : ""
              }`}
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              to="/company"
              className={`navbar-item ${isActive("/company") ? "active" : ""}`}
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              className={`navbar-item ${isActive("/support") ? "active" : ""}`}
            >
              Support
            </Link>
          </li>
        </ul>
        <div className="navbar-button">
          <button onClick={handleBtnClick}>Let's Partner</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="navbar-header">
          <div className="navbar-logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <button className="navbar-toggle" onClick={toggleMenu}>
            <GiHamburgerMenu size={24} />
          </button>
        </div>
        {menuOpen && (
          <ul className="mobile-menu-links">
            <li>
              <Link
                to="/"
                className={`navbar-item ${isActive("/") ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/solutions"
                className={`navbar-item ${
                  isActive("/solutions") ? "active" : ""
                }`}
                onClick={toggleMenu}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className={`navbar-item ${
                  isActive("/company") ? "active" : ""
                }`}
                onClick={toggleMenu}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className={`navbar-item ${
                  isActive("/support") ? "active" : ""
                }`}
                onClick={toggleMenu}
              >
                Support
              </Link>
            </li>
            <li className="navbar-button">
              <button>Let's Partner</button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
