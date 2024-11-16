import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const EventDetails = ({ 
  eventName, 
  backgroundImage, 
  date, 
  description, 
  rating, 
  votes, 
  duration, 
  categories, 
  languages 
}) => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Card className="w-full md:w-1/3 bg-black bg-opacity-50 text-white">
            <CardContent className="p-0">
              <img src={backgroundImage} alt={eventName} className="w-full h-auto" />
              <div className="p-4">
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">Book tickets</Button>
              </div>
            </CardContent>
          </Card>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-white mb-4">{eventName}</h1>
            <div className="flex items-center mb-4">
              {/* <span className="text-pink-500 text-2xl mr-2">★</span> */}
              {/* <span className="text-white text-xl font-bold mr-2">{rating}/10</span> */}
              {/* <span className="text-gray-300">({votes} Votes)</span> */}
              {/* <Button variant="outline" className="ml-4 text-white border-white hover:bg-white hover:text-black">
                Rate now
              </Button> */}
            </div>
            <div className="mb-4">
              <span className="bg-gray-700 text-white px-2 py-1 rounded mr-2">2D</span>
              {/* <span className="text-white">{languages.join(', ')}</span> */}
            </div>
            <div className="text-white mb-4">
              {/* {duration} • {categories.join(', ')} • {date} */}
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white mb-8"><Link to='/SeatLayout'>Book tickets</Link></Button>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">About the event</h2>
              <p className="text-gray-300">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;