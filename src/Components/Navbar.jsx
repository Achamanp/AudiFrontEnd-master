import React from 'react'
import logo from '../Assets/logofinal.png'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className=' w-full h-24 absolute top-0 flex shadow-xl justify-around gap-80'>
      <div className="logo mb-5">
        <img className=' mb-4' src={logo} width={120} height={96} />
      </div>
      <div className="list flex list-none gap-14 text-xl items-center text-black">
       <Link to='/TicketPage'> <li>About</li></Link>
        <Link to='/AdminPanel'><li>Admin Panel</li></Link>
        <li>Team</li>
        <li>Login</li>
        <li>SignUp</li>
      </div>
    </div>
  )
}


export default Navbar