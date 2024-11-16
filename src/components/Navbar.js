import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <div className="brand">Anime Hub</div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/news" className="nav-link">News</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/club" className="nav-link">Clubs</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
