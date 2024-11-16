import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Example images for anime characters
  const animeCharacters = [
    { name: 'Naruto Uzumaki', src: 'https://via.placeholder.com/300x400?text=Naruto' },
    { name: 'Sakura Haruno', src: 'https://via.placeholder.com/300x400?text=Sakura' },
    { name: 'Luffy', src: 'https://via.placeholder.com/300x400?text=Luffy' },
    { name: 'Goku', src: 'https://via.placeholder.com/300x400?text=Goku' },
    { name: 'Saitama', src: 'https://via.placeholder.com/300x400?text=Saitama' },
    { name: 'Deku', src: 'https://via.placeholder.com/300x400?text=Deku' },
    { name: 'Tanjiro Kamado', src: 'https://via.placeholder.com/300x400?text=Tanjiro' },
    { name: 'Itachi Uchiha', src: 'https://via.placeholder.com/300x400?text=Itachi' },
  ];

  return (
    <div className="gallery">
      <h2>Memory Lane</h2>
      <p>Explore the iconic characters from the world of anime!</p>
      <div className="gallery-images">
        {animeCharacters.map((character, index) => (
          <div className="gallery-item" key={index}>
            <img src={character.src} alt={character.name} />
            <div className="overlay">
              <p>{character.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
