import React from 'react';
import NewsCarousel from './NewsCarousel'; // Assume NewsCarousel is already created
import './NewsSection.css';

const NewsSection = () => {
  return (
    <section className="news-section">
      <h2>Latest Adventures</h2>
      <p>Stay updated with the latest anime news and events!</p>
      <NewsCarousel />
    </section>
  );
};

export default NewsSection;
