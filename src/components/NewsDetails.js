import React, { useState, useEffect } from 'react';
import './NewsDetails.css';

const NewsDetails = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [additionalNews, setAdditionalNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Replace with a real API endpoint
  const apiUrl = 'https://api.jikan.moe/v4/anime'; // Example of a valid API URL

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();

          const formattedNews = data.data.map((item) => ({
            title: item.title || 'No Title', // Fallback if title is missing
            content: item.synopsis || 'No description available.', // Fallback if synopsis is missing
            image: item.images?.jpg?.image_url || 'placeholder-image-url.jpg', // Fallback if image is missing
            isExpanded: false,
          }));

          setNewsArticles(formattedNews.slice(0, 3)); // First 3 articles
          setAdditionalNews(formattedNews.slice(3)); // Remaining articles
        } else {
          console.error('Failed to fetch news. Status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const toggleReadMore = (index, isMain) => {
    if (isMain) {
      setNewsArticles((prevArticles) =>
        prevArticles.map((article, i) =>
          i === index ? { ...article, isExpanded: !article.isExpanded } : article
        )
      );
    } else {
      setAdditionalNews((prevArticles) =>
        prevArticles.map((article, i) =>
          i === index ? { ...article, isExpanded: !article.isExpanded } : article
        )
      );
    }
  };

  const truncateContent = (content, isExpanded) => {
    if (isExpanded) {
      return content;
    }
    return content.split(' ').slice(0, 10).join(' ') + '...';
  };

  return (
    <section className="news-details">
      <h2>News Highlights</h2>

      {isLoading ? (
        <p>Loading news...</p>
      ) : (
        <>
          <div className="news-articles">
            {newsArticles.map((article, index) => (
              <div key={index} className="news-article">
                <img src={article.image} alt={article.title} className="news-image" />
                <h3>{article.title}</h3>
                <p>{truncateContent(article.content, article.isExpanded)}</p>
                <button
                  onClick={() => toggleReadMore(index, true)}
                  className="read-more-button"
                >
                  {article.isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            ))}
          </div>

          {additionalNews.length > 0 && (
            <>
              <h3 className="small-news-heading">Other News</h3>
              <div className="small-news-grid">
                {additionalNews.map((news, index) => (
                  <div key={index} className="small-news-box">
                    <img src={news.image} alt={news.title} className="small-news-image" />
                    <h4>{news.title}</h4>
                    <p>{truncateContent(news.content, news.isExpanded)}</p>
                    <button
                      onClick={() => toggleReadMore(index, false)}
                      className="read-more-button"
                    >
                      {news.isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default NewsDetails;