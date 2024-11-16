import React, { useState } from 'react';
import classnames from 'classnames';


const SeatLayout = ({
  rows = 25,
  cols = 43
}) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const onSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const renderSeats = () => {
    const seats = [];
    for (let row = 0; row < 30; row++) {
      const rowSeats = [];
      for (let col = 0; col < 40; col++) {
        const seatId = `${String.fromCharCode(row + 65)}${col + 1}`;
        const isSelected = selectedSeats.includes(seatId);
        const seatClass = classnames(
          'w-8 h-8 rounded-sm cursor-pointer transition-colors duration-300 flex items-center justify-center text-sm font-semibold',
          {
            'bg-green-500 hover:bg-green-600 text-white': !isSelected,
            'bg-red-500 hover:bg-red-600 text-white': isSelected
          }
        );
        rowSeats.push(
          <div
            key={seatId}
            className={seatClass}
            onClick={() => onSeatClick(seatId)}
          >
            {seatId}
          </div>
        );
      }
      seats.push(<div key={`row-${row}`} className="flex gap-1 mb-1">{rowSeats}</div>);
    }
    return seats;
  };
   
  const bookTicket = async () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat');
      return;
    }

    // Console log the selected seats
    console.log('Seats being sent to the backend:', selectedSeats);

    try {
      const response = await fetch('http://your-spring-boot-backend-url/book-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ seats: selectedSeats }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Backend response:', result);
        alert(`Booking successful! Ticket ID: ${result.ticketId}`);
        setSelectedSeats([]);
      } else {
        console.error('Booking failed. Server response:', response);
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error booking ticket:', error);
      alert('An error occurred while booking. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">{renderSeats()}</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={bookTicket}
      >
        Book Ticket
      </button>
    </div>
  );
};

export default SeatLayout;