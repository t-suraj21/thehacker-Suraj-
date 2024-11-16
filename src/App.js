import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import WelcomeSection from './components/WelcomeSection';
import NewsSection from './components/NewsSection';
import EventPage from './components/EventPage';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <Navbar />

        {/* Home Page - Landing Page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsSection />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

// Home Page Component (Landing Page)
const Home = () => {
  return (
    <div>
      {/* Banner and Welcome Section */}
      <Banner />
      <WelcomeSection />
      <NewsSection />
    </div>
  );
};

export default App;
