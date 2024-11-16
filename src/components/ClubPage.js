import React from 'react';
import './ClubPage.css';

const ClubPage = () => {
  return (
    <div className="club-page">
      <h2>Welcome to the Anime Club!</h2>
      <p>Join our community of anime lovers and dive into exciting events and discussions!</p>

      {/* About Section */}
      <section className="about-club">
        <h3>About Us</h3>
        <p>
          Our Anime Club is a vibrant community of anime fans who meet to share their passion, discuss the latest episodes, attend events, and participate in cosplay contests. Whether you're a seasoned anime enthusiast or a newcomer, there's something for everyone!
        </p>
      </section>

      {/* Activities Section */}
      <section className="activities">
        <h3>Club Activities</h3>
        <ul>
          <li>Weekly Anime Screenings</li>
          <li>Monthly Cosplay Contests</li>
          <li>Anime Trivia Nights</li>
          <li>Discussion Panels</li>
          <li>Collaborative Fan Art Projects</li>
        </ul>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <h3>Upcoming Events</h3>
        <div className="event-card">
          <h4>Anime Convention 2024</h4>
          <p>Date: July 2024</p>
          <p>Location: Tokyo Dome City, Japan</p>
        </div>
        <div className="event-card">
          <h4>Manga Launch Party</h4>
          <p>Date: August 2024</p>
          <p>Location: Shibuya, Tokyo, Japan</p>
        </div>
      </section>

      {/* Contact Form for New Members */}
      <section className="contact-form">
        <h3>Become a Member</h3>
        <form>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <button type="submit">Join Now</button>
        </form>
      </section>
    </div>
  );
};

export default ClubPage;
