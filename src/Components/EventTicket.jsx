import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import html2canvas from 'html2canvas';

const ConcertTicket = () => {
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    // Fetch ticket data from backend
    const fetchTicketData = async () => {
      try {
        const response = await fetch('http://your-backend-url/ticket-data');
        const data = await response.json();
        setTicketData(data);
      } catch (error) {
        console.error('Error fetching ticket data:', error);
      }
    };

    fetchTicketData();
  }, []);

  const downloadTicket = () => {
    const ticketElement = document.getElementById('concert-ticket');
    html2canvas(ticketElement).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'concert-ticket.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  // if (!ticketData) return <div>Loading ticket...</div>;

  return (
    <div className="flex flex-col items-center">
      <div
        id="concert-ticket"
        className="w-96 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 z-0">
          <div className="w-full h-full bg-[url('https://example.com/texture.png')] bg-repeat opacity-30"></div>
        </div>
        <div className="relative z-10">
          {/* <h1 className="text-3xl font-bold mb-2">{ticketData.eventName}</h1> */}
          <h1 className="text-3xl font-bold mb-2">Invertia</h1>

          <div className="flex justify-between items-start mb-4">
            <div>
              {/* <p className="text-sm">Name: {ticketData.name}</p> */}
              <p className="text-sm">Name: Ayush Rai</p>

              {/* <p className="text-sm">Student ID: {ticketData.studentId}</p> */}
              <p className="text-sm">Student ID: bcs2022175</p>
              {/* <p className="text-sm">Seat: {ticketData.seatNumber}</p> */}
              <p className="text-sm">Seat: 123</p>

            </div>
            <QRCodeSVG value={JSON.stringify(ticketData)} size={64} />
          </div>
          <div className="absolute bottom-4 right-4 transform rotate-[-5deg] bg-yellow-300 text-black px-4 py-1 rounded font-bold">
            ADMIT ONE
          </div>
        </div>
      </div>
      <button
        onClick={downloadTicket}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Ticket
      </button>
    </div>
  );
};

export default ConcertTicket;