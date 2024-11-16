
import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import banner1 from '../Assets/banner1.jpeg'
import banner2 from '../Assets/banner2.jpeg'
import banner3 from '../Assets/banner3.jpeg'




// import required modules
import { Navigation } from 'swiper/modules';
import Cards from './Cards'
import Navbar from './Navbar';

function HomePage({ authToken }) {
  const navigate = useNavigate();

  // You can use the authToken prop here
  console.log('Current auth token:', authToken);

  // Example of how to handle unauthorized access
  const handleApiCall = async () => {
    try {
      const response = await fetch('/api/protected-resource', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      
      if (response.status === 401) {
        // Token expired or invalid
        navigate('/login');
      }
      
      // Handle successful response
      const data = await response.json();
      // Process data...
    } catch (error) {
      console.error('API call failed:', error);
    }
  };
  return (
    <div className=' px-4 py-4 mx-2 my-2'>
      <div className='h-[60px]'>
      <Navbar/>
      </div>
     
    <div>
       <Swiper navigation={true} modules={[Navigation]} className="mySwiper shadow-2xl w-[96%] mt-11">
        <SwiperSlide><img className=' w-full h-[400px]' src={banner1}/></SwiperSlide>
        <SwiperSlide><img className=' w-full h-[400px]' src={banner2}/></SwiperSlide>
        <SwiperSlide><img className=' w-full h-[400px]' src={banner3}/></SwiperSlide>
      </Swiper>
    </div>
    <div>
      <Cards/>
    </div>
    </div>
  )
}

export default HomePage