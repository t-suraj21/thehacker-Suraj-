import React from 'react';

const NewsCard = ({ title, description, image, link }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-pink-300 to-purple-300">
      <img src={image} alt="news" className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-lg text-gray-800 mt-2">{description}</p>
        <a href={link} className="inline-block mt-4 text-purple-700 hover:text-purple-900">Read More</a>
      </div>
    </div>
  );
};

export default NewsCard;
