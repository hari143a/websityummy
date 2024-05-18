import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './style.css';

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const closeNavbar = () => {
    setCollapsed(true);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    closeNavbar(); // Close the navbar after clicking on a link
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="home" spy={true} smooth={true} offset={0} duration={500} onClick={scrollToTop}>
          Yummy<span style={{ color: 'red' }}>.</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarID"
          aria-expanded={!collapsed ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarID">
          <div className="navbar-nav">
            <Link className="nav-link" activeClass="active" to="hero" spy={true} smooth={true} offset={0} duration={500} onClick={closeNavbar}>
              Home
            </Link>
            <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onClick={closeNavbar}>
              About
            </Link>
            <Link className="nav-link" activeClass="active" to="menu" spy={true} smooth={true} offset={0} duration={500} onClick={closeNavbar}>
              Menu
            </Link>
            <Link className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={closeNavbar}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
