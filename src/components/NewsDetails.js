import React from 'react';
import './NewsDetails.css';

// Importing images from assets folder
import anime1 from '../assets/1.png';
import anime2 from '../assets/2.png'
import anime3 from '../assets/3.png';

const NewsDetails = () => {
  const newsArticles = [
    {
      title: 'Upcoming Anime Festival!',
      content: 'Join us for an amazing anime festival featuring exclusive screenings and meetups.',
      image: anime1, // Use imported image
    },
    {
      title: 'New Manga Release!',
      content: 'Check out the latest manga hitting the shelves this weekend.',
      image: anime2, // Use imported image
    },
    {
      title: 'Anime Trivia Night',
      content: 'Test your anime knowledge at the upcoming trivia night. Great prizes await!',
      image: anime3, // Use imported image
    },
  ];

  const additionalNews = Array.from({ length: 20 }, (_, index) => ({
    title: `News Item ${index + 1}`,
    content: 'This is a brief description of the news item.',
    image: anime1, // Use imported image (or another image based on index)
  }));

  return (
    <section className="news-details">
      <h2>News Highlights</h2>
      <div className="news-articles">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-article">
            <img src={article.image} alt={article.title} className="news-image" />
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>

      <h3 className="small-news-heading">Other News</h3>
      <div className="small-news-grid">
        {additionalNews.map((news, index) => (
          <div key={index} className="small-news-box">
            <img src={news.image} alt={news.title} className="small-news-image" />
            <h4>{news.title}</h4>
            <p>{news.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsDetails;
