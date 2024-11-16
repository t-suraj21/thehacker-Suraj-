import React from 'react';
import { motion } from 'framer-motion';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      {/* Rotating background stars and moon */}
      <div className="background-animations">
        <motion.div
          className="starry-sky"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="moon"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Title and Subheading */}
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
