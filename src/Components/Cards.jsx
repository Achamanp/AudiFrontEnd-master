import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';

const Cards = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events'); // Backend
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading events...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex justify-around flex-wrap">
      {events.map((event) => (
        <Link key={event.id} to={`/EventDetails/${event.id}`}>
          <Card
            image={event.image}
            details={event.name}
            date={event.date}
            description={event.description}
          />
        </Link>
      ))}
    </div>
  );
};

export default Cards;