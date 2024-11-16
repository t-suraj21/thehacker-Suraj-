import React from 'react';
import { motion } from 'framer-motion';
import animeMascot from '../assets/image.png'; // Use an anime character image
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <motion.img
        src={animeMascot}
        alt="Anime Mascot"
        className="anime-mascot"
        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.h1
        className="banner-heading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Welcome to Anime College Hub!
      </motion.h1>
      <motion.p
        className="banner-subheading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Your portal to the latest adventures, quests, and memories.
      </motion.p>
    </div>
  );
};

export default Banner;
