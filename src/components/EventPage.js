import React from 'react';
import './EventPage.css';

const EventsPage = () => {
  return (
    <div className="events-page">
      <h2>Upcoming Quests</h2>
      <p>Don't miss out on the upcoming events and anime quests!</p>
      <div className="event-card">
        <h3>Anime Convention 2024</h3>
        <p>Date: July 2024</p>
        <p>Countdown: <span>3 days left</span></p>
      </div>
    </div>
  );
};

export default EventsPage;
