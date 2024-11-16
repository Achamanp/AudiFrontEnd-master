import React from 'react'
import LandingPage from './Components/LandingPage'
import HomePage from './Components/HomePage'
import SignUpPage from './Components/Auth/SignUp'
import Login from './Components/Auth/Login'
import EventDetails from './Components/EventDetails'
import backgroundImage from './Assets/invertisHome.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SeatLayout from './Components/SeatLayout'
import EventTicket from './Components/EventTicket'
import AdminEventForm from './Components/AdminEventForm'

function App() {
  const [selectedSeats, setSelectedSeats] = React.useState([]);

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUpPage/>}/>
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/AdminPanel' element={<AdminEventForm/>}/>
        <Route path='/TicketPage' element={<EventTicket/>}/>
        <Route path='/EventDetails' element={<EventDetails backgroundImage={backgroundImage} eventName={'Shark Tank Invertis'} description={"vgg vyt ytvgf fcytc iuhgui uighui gtft hgcc kk"}/>}/>
        <Route path='/SeatLayout' element={<div className="p-8">
      <SeatLayout
        rows={15}
        cols={23}
        selectedSeats={selectedSeats}
        onSeatClick={handleSeatClick}
      />
    </div>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App