import React, { useRef } from 'react';
import './NewsSection.css';

const NewsSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const images = [
    { src: 'https://via.placeholder.com/600x400', message: 'New Anime Event Coming Soon!' },
    { src: 'https://via.placeholder.com/600x400', message: 'Exclusive Anime Merchandise Available Now!' },
    { src: 'https://via.placeholder.com/600x400', message: 'Meet Your Favorite Anime Characters!' },
    { src: 'https://via.placeholder.com/600x400', message: 'Top 10 Anime Episodes of the Year!' },
    { src: 'https://via.placeholder.com/600x400', message: 'Join the Biggest Anime Meetup Today!' },
    { src: 'https://via.placeholder.com/600x400', message: 'New Anime Event Coming Soon!' },
    { src: 'https://via.placeholder.com/600x400', message: 'Exclusive Anime Merchandise Available Now!' },
    { src: 'https://via.placeholder.com/600x400', message: 'Meet Your Favorite Anime Characters!' },
    { src: 'https://via.placeholder.com/600x400', message: 'Top 10 Anime Episodes of the Year!' },
    { src: 'https://via.placeholder.com/600x400', message: 'Join the Biggest Anime Meetup Today!' },
  ];

  return (
    <section className="news-section">
      <h2>Latest Adventures</h2>
      <p>Stay updated with the latest anime news and events!</p>

      <button className="scroll-button left" onClick={scrollLeft}>
        &#9664;
      </button>
      <button className="scroll-button right" onClick={scrollRight}>
        &#9654;
      </button>

      <div className="image-flash-container" ref={scrollContainerRef}>
        {images.map((image, index) => (
          <div key={index} className="image-flash-card">
            <img src={image.src} alt={`Flash ${index + 1}`} className="flash-image" />
            <p className="flash-message">{image.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
