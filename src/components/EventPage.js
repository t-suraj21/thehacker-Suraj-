import React from 'react';
import './EventPage.css';

const EventsPage = () => {
  const events = [
    {
      title: 'Anime Convention 2024',
      date: 'July 2024',
      time: '10:00 AM - 6:00 PM',
      venue: 'Tokyo Dome City, Japan',
      countdown: '3 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Manga Launch Party',
      date: 'August 2024',
      time: '5:00 PM - 9:00 PM',
      venue: 'Shibuya, Tokyo, Japan',
      countdown: '15 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Anime Cosplay Contest',
      date: 'September 2024',
      time: '12:00 PM - 4:00 PM',
      venue: 'Osaka Expo Center, Osaka, Japan',
      countdown: '30 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Anime Convention 2024',
      date: 'July 2024',
      time: '10:00 AM - 6:00 PM',
      venue: 'Tokyo Dome City, Japan',
      countdown: '3 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Manga Launch Party',
      date: 'August 2024',
      time: '5:00 PM - 9:00 PM',
      venue: 'Shibuya, Tokyo, Japan',
      countdown: '15 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Anime Cosplay Contest',
      date: 'September 2024',
      time: '12:00 PM - 4:00 PM',
      venue: 'Osaka Expo Center, Osaka, Japan',
      countdown: '30 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Anime Convention 2024',
      date: 'July 2024',
      time: '10:00 AM - 6:00 PM',
      venue: 'Tokyo Dome City, Japan',
      countdown: '3 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Manga Launch Party',
      date: 'August 2024',
      time: '5:00 PM - 9:00 PM',
      venue: 'Shibuya, Tokyo, Japan',
      countdown: '15 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Anime Cosplay Contest',
      date: 'September 2024',
      time: '12:00 PM - 4:00 PM',
      venue: 'Osaka Expo Center, Osaka, Japan',
      countdown: '30 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Anime Convention 2024',
      date: 'July 2024',
      time: '10:00 AM - 6:00 PM',
      venue: 'Tokyo Dome City, Japan',
      countdown: '3 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Manga Launch Party',
      date: 'August 2024',
      time: '5:00 PM - 9:00 PM',
      venue: 'Shibuya, Tokyo, Japan',
      countdown: '15 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Anime Cosplay Contest',
      date: 'September 2024',
      time: '12:00 PM - 4:00 PM',
      venue: 'Osaka Expo Center, Osaka, Japan',
      countdown: '30 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Anime Convention 2024',
      date: 'July 2024',
      time: '10:00 AM - 6:00 PM',
      venue: 'Tokyo Dome City, Japan',
      countdown: '3 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Manga Launch Party',
      date: 'August 2024',
      time: '5:00 PM - 9:00 PM',
      venue: 'Shibuya, Tokyo, Japan',
      countdown: '15 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Anime Cosplay Contest',
      date: 'September 2024',
      time: '12:00 PM - 4:00 PM',
      venue: 'Osaka Expo Center, Osaka, Japan',
      countdown: '30 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Anime Convention 2024',
      date: 'July 2024',
      time: '10:00 AM - 6:00 PM',
      venue: 'Tokyo Dome City, Japan',
      countdown: '3 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Manga Launch Party',
      date: 'August 2024',
      time: '5:00 PM - 9:00 PM',
      venue: 'Shibuya, Tokyo, Japan',
      countdown: '15 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
    {
      title: 'Anime Cosplay Contest',
      date: 'September 2024',
      time: '12:00 PM - 4:00 PM',
      venue: 'Osaka Expo Center, Osaka, Japan',
      countdown: '30 days left',
      icon: 'https://via.placeholder.com/30', // Icon URL for the event
    },
  ];

  return (
    <div className="events-page">
      <h2>Upcoming Anime Events</h2>
      <p>Don't miss out on the upcoming events and anime quests!</p>

      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-icon">
              <img src={event.icon} alt={event.title} />
            </div>
            <div className="event-info">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p className="countdown"><strong>Countdown:</strong> {event.countdown}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
