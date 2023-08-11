import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import KickLogo from "../images/kicklogo/KickLogo.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="logo-img" src={KickLogo} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              SERVICES 
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              BLOG
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
        <div class="navbar-top-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="navbar-top-icon"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="mailto:info@kickandcosynergy.com" class="navbar-top-icon">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="tel:+1234567890" class="navbar-top-icon">
            <i class="fas fa-phone-alt"></i>
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="navbar-top-icon"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="navbar-top-icon"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/kick-co-synergy-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            class="navbar-top-icon"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
