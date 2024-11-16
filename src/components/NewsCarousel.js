import React from 'react';
import Slider from 'react-slick';
import NewsCard from './NewsCard';

const newsData = [
  {
    title: "New Anime Release",
    description: "Check out the latest anime series, now streaming!",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "Anime Convention Highlights",
    description: "Get the inside scoop from the biggest anime convention of the year.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "Exclusive Interview",
    description: "An in-depth conversation with your favorite anime creator.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
];

const NewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-8">
      <Slider {...settings}>
        {newsData.map((news, index) => (
          <div key={index}>
            <NewsCard {...news} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
