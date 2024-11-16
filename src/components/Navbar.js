import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">Anime Hub</div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/events">Events</Link>
          <Link to="/clubs">Clubs</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
