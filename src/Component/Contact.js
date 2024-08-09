import React from 'react';
import banner from '../images/CONTACT-1.jpg';
import time from '../images/contact-time.jpg';
import Feedback from './Feedback';
import Footer from './Footer';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Contact() {
    return (
        <>
            <div className="h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
                <div className="w-full h-full flex items-center justify-center bg-black/35">
                    <div className="text-white text-center max-w-[1140px] px-3">
                        <h1 className='text-3xl md:text-6xl font-bold mb-4 lg:leading-[60px]'>Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className="pt-24 pb-4 max-w-[1240px] m-auto md:grid grid-cols-2 gap-6 lg:gap-14">
                    <div className="px-4 mb-5 md:mb-0">
                        <p className='text-lg text-[#666666] mb-4 mt-4'>Feel Free To Reach Us.</p>
                        <p className='text-lg text-[#666666] mb-4 mt-4'>We are all ears for your f'eat'back and queries. Contact us now, and we will get back to you.</p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="">
                                <h1 className='font-bold text-lg mb-3'>Our Addresses</h1>
                                <p className='text-sm text-[#666666] mb-3'>34, Karl Marx Sarani, Kidderpore, Kolkata</p>
                                <p className='text-sm text-[#666666] leading-6 mb-4'>9, Kazi Nazrul Islam Avenue
                                    Kaikhali Crossing,
                                    Kolkata- 700052</p>
                                <h1 className='font-bold text-lg mb-3'>Follow Us</h1>
                                <div className="flex justify-start text-2xl gap-4 ">
                                    <AiOutlineInstagram className='hover:text-[#d3a971]' />
                                    <AiOutlineFacebook className='hover:text-[#d3a971]' />
                                    <AiFillTwitterCircle className='hover:text-[#d3a971]' />
                                </div>
                            </div>
                            <div className="">
                                <h1 className='font-bold text-lg mb-3'>Email Id:</h1>
                                <p className='text-sm text-[#666666] mb-4'>info@indiarestaurant.in</p>
                                <h1 className='font-bold text-lg mb-3'>Email Id:</h1>
                                <p className='text-sm text-[#666666] mb-3'>info@indiarestaurant.in</p>
                                <p className='text-sm text-[#666666] mb-3'>info@indiarestaurant.in</p>
                                <p className='text-sm text-[#666666] mb-3'>info@indiarestaurant.in</p>
                                <p className='text-sm text-[#666666] mb-3'>info@indiarestaurant.in</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="max-w-[410px] m-auto h-[550px] relative">
                            <img src={time} alt="Interior" className='w-full h-full m-auto absolute' />
                            <div className="absolute text-white p-12 left-0 right-0">
                                <h1 className='text-center text-[28px] font-bold mb-4'>Opening Times</h1>
                                <ul className='text-gray-300'>
                                    <li className='text-sm pb-2 mb-2 flex justify-between border-b-2 border-dashed border-gray-500'>
                                        <span>Mon:</span>
                                        <span>11:00 AM – 11:00 PM</span>
                                    </li>
                                    <li className='text-sm pb-2 mb-2 flex justify-between border-b-2 border-dashed border-gray-500'>
                                        <span>Tue:</span>
                                        <span>11:00 AM – 11:00 PM</span>
                                    </li>
                                    <li className='text-sm pb-2 mb-2 flex justify-between border-b-2 border-dashed border-gray-500'>
                                        <span>Wed:</span>
                                        <span>11:00 AM – 11:00 PM</span>
                                    </li>
                                    <li className='text-sm pb-2 mb-2 flex justify-between border-b-2 border-dashed border-gray-500'>
                                        <span>Thu:</span>
                                        <span>11:00 AM – 11:00 PM</span>
                                    </li>
                                    <li className='text-sm pb-2 mb-2 flex justify-between border-b-2 border-dashed border-gray-500'>
                                        <span>Fri:</span>
                                        <span>11:00 AM – 11:00 PM</span>
                                    </li>
                                    <li className='text-sm pb-2 mb-2 flex justify-between border-b-2 border-dashed border-gray-500'>
                                        <span>Sat:</span>
                                        <span>11:00 AM – 11:00 PM</span>
                                    </li>
                                    <li className='text-sm pb-2 mb-2 flex justify-between border-b-2 border-dashed border-gray-500'>
                                        <span>Sun:</span>
                                        <span>11:00 AM – 11:00 PM</span>
                                    </li>
                                </ul>
                                <h2 className='text-center text-red-500 mt-5'>Call Us Now</h2>
                                <h1 className='text-center text-[28px] font-bold mt-2'>8481848484</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Feedback />
            <Footer />
        </>
    )
}
