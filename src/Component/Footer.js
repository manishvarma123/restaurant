import React from 'react';
import logo from '../images/white-india.png';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";


export default function Footer() {
  return (
    <>
      <div className='bg-[#222]'>
        <div className="max-w-[1240px] m-auto py-16 lg:py-28 px-3" >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center text-white mb-4">
              <img src={logo} alt="Restaurant" className='h-20 inline-block' />
              <p className='text-[#9b9b9b] mb-4 text-[17px] px-3'>India Restaurant is known for creating unforgettable food experiences. We believe that food is therapy and try to put up a smile on your face with our culinary skills.</p>
              <div className="flex justify-center text-2xl gap-4 ">
                <AiOutlineInstagram className='hover:text-[#d3a971]'/>
                <AiOutlineFacebook className='hover:text-[#d3a971]'/>
                <AiFillTwitterCircle className='hover:text-[#d3a971]'/>
              </div>
            </div>
            <div className="px-3 text-center mb-4">
              <h1 className='text-white font-bold text-2xl mb-4'>Our Addresses</h1>
              <p className='text-[#9b9b9b] mb-4 text-[17px]'>34, Karl Marx Sarani, Kidderpore, Kolkata</p>
              <p className='text-[#9b9b9b] mb-4 text-[17px]'>9, Kazi Nazrul Islam Avenue
                Kaikhali Crossing,
                Kolkata- 700052</p>
            </div>
            <div className="px-3 text-center mb-4">
              <h1 className='text-white font-bold text-2xl mb-4'>Business Hours</h1>
              <p className='text-[#9b9b9b] mb-2 text-[17px]'>Mon: 11:00 AM – 11:00 PM</p>
              <p className='text-[#9b9b9b] mb-2 text-[17px]'>Tue: 11:00 AM – 11:00 PM</p>
              <p className='text-[#9b9b9b] mb-2 text-[17px]'>Wed: 11:00 AM – 11:00 PM</p>
              <p className='text-[#9b9b9b] mb-2 text-[17px]'>Thu: 11:00 AM – 11:00 PM</p>
              <p className='text-[#9b9b9b] mb-2 text-[17px]'>Fri: 11:00 AM – 11:00 PM</p>
              <p className='text-[#9b9b9b] mb-2 text-[17px]'>Sat: 11:00 AM – 11:00 PM</p>
              <p className='text-[#9b9b9b] mb-2 text-[17px]'>Sun: 11:00 AM – 11:00 PM</p>
            </div>
            <div className='px-3 text-center mb-4'>
              <h1 className='text-white font-bold text-2xl mb-4'>Contact Details</h1>
              <p className='text-[#9b9b9b] mb-2 text-[17px] text-center'><AiFillPhone className='inline-block' /> +91 8481848484</p>
              <p className='text-[#9b9b9b] mb-2 text-[17px] text-center'><AiFillPhone className='inline-block' /> +91 8420533005</p>
              <p className='text-[#9b9b9b] mb-2 text-[17px] text-center'><AiFillPhone className='inline-block' /> +033 4804 9142</p>
              <p className='text-[#9b9b9b] mb-2 text-[17px] text-center'><AiFillPhone className='inline-block' /> +91 99039 80011</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/95 py-10 text-center">
        <ul className='text-white font-bold text-center '>
          <li className='inline-block mx-3'><a href="" className='hover:text-[#d3a971] hover:no-underline'>Home</a></li>
          <li className='inline-block mx-3'><a href="" className='hover:text-[#d3a971] hover:no-underline'>About Us</a></li>
          <li className='inline-block mx-3'><a href="" className='hover:text-[#d3a971] hover:no-underline'>Menu</a></li>
          <li className='inline-block mx-3'><a href="" className='hover:text-[#d3a971] hover:no-underline'>Gallery</a></li>
          <li className='inline-block mx-3'><a href="" className='hover:text-[#d3a971] hover:no-underline'>Contact Us</a></li>
        </ul>
        <p className='text-[#9b9b9b] mt-3'>© 2022 India Restaurant. | All Rights Reserved.</p>
      </div>
    </>

  )
}
