import React from 'react'
import img from '../Assets/invertisHome.jpg'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'



function HomePage() {
  return (
    <>
    
    <div className="cont">
      <div className="img w-full h-[75vh] z-0">
        <img className=' overflow-hidden h-[100vh] w-full blur-sm' src={img}/>
      </div>
      <Navbar/>
      <div className="flex flex-col justify-center  items-center overlay absolute z-10 bg-black h-[30vw] w-[60%] top-52 opacity-50 rounded-r-lg">
        <h1 className=' text-white text-7xl text-center font-extrabold tracking-wider'>Invertis Auditorium <br /> Booking System</h1>
        <div className="btn mt-10">
          <button className=' w-28 rounded-full font-bold text-lg h-14 bg-white text-black mr-16'><Link to='/Login'>Login</Link></button>
          <button className=' w-28 rounded-full font-bold text-lg h-14 border-2 p-2 border-white text-white hover:bg-white hover:text-black transition duration-300 '><Link to="/SignUp">SignUp</Link></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage