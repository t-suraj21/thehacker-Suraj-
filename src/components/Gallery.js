import React, { useEffect, useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [animeImages, setAnimeImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch images from an API (placeholder for a real anime API)
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/anime'); // Replace with a suitable anime image API
        const data = await response.json();
        const images = data.data.map((anime) => ({
          name: anime.title,
          src: anime.images.jpg.image_url || anime.images.webp.image_url,
        }));
        setAnimeImages(images);
      } catch (error) {
        console.error('Error fetching anime images:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="gallery">
      <h2>Latest Anime Gallery</h2>
      <p>Explore trending anime characters and download their images!</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="gallery-images">
          {animeImages.map((anime, index) => (
            <div className="gallery-item" key={index}>
              <img src={anime.src} alt={anime.name} />
              <div className="overlay">
                <p>{anime.name}</p>
                <a
                  href={anime.src}
                  download={`${anime.name}.jpg`}
                  className="download-button"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
