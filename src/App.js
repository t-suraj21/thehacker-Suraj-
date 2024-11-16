import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import NewsSection from './components/NewsSection';  // Ensure this file exists
import NewsDetails from './components/NewsDetails';
import EventPage from './components/EventPage';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';
import ClubPage from './components/ClubPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Other Pages */}
          <Route path="/news" element={<NewsDetails />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/club" element={<ClubPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

// Home Page Component
const Home = () => {
  return (
    <div>
      <Banner />
      <NewsSection />
      {/* <ClubPage/> */}
    </div>
  );
};

export default App;
