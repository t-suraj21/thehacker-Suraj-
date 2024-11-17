import React, { useState, useEffect, useRef } from 'react';
import './NewsSection.css';

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  // Correct API URL to fetch top anime
  const apiUrl = 'https://api.jikan.moe/v4/top/anime';

  // Fetch anime news from the API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          const formattedNews = data.data.map((item) => ({
            src: item.images.jpg.image_url, // Anime image
            message: item.title, // Anime title
            link: item.url, // Anime details URL
          }));
          setNewsItems(formattedNews);
        } else {
          console.error('Failed to fetch news, using static fallback.');
          setNewsItems(staticNewsItems);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setNewsItems(staticNewsItems);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Fallback static news items
  const staticNewsItems = [
    { src: 'https://via.placeholder.com/600x400', message: 'New Anime Event Coming Soon!', link: '#' },
    { src: 'https://via.placeholder.com/600x400', message: 'Exclusive Anime Merchandise Available Now!', link: '#' },
    { src: 'https://via.placeholder.com/600x400', message: 'Meet Your Favorite Anime Characters!', link: '#' },
    { src: 'https://via.placeholder.com/600x400', message: 'Top 10 Anime Episodes of the Year!', link: '#' },
    { src: 'https://via.placeholder.com/600x400', message: 'Join the Biggest Anime Meetup Today!', link: '#' },
  ];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="news-section">
      <h2>Latest Adventures</h2>
      <p>Stay updated with the latest anime news and events!</p>

      {isLoading ? (
        <p>Loading news...</p>
      ) : (
        <>
          <button className="scroll-button left" onClick={scrollLeft}>
            &#9664;
          </button>
          <button className="scroll-button right" onClick={scrollRight}>
            &#9654;
          </button>

          <div className="image-flash-container" ref={scrollContainerRef}>
            {newsItems.map((news, index) => (
              <div key={index} className="image-flash-card">
                <img src={news.src} alt={`Flash ${index + 1}`} className="flash-image" />
                <p className="flash-message">{news.message}</p>
                <a href={news.link} className="read-more" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default NewsSection;
