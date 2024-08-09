import React from 'react';
import about from '../images/ABOUT-1.jpg';
import welcome from '../images/about-welcome.jpg';
import logo from '../images/white-black.png';
import mission from '../images/vision-banner.jpg';
import Footer from './Footer';

export default function About() {
    return (
        <>
            <div className="h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${about})` }}>
                <div className="w-full h-full flex items-center justify-center bg-black/35">
                    <div className="text-white text-center max-w-[1140px] px-3">
                        <h1 className='text-3xl md:text-6xl font-bold mb-4 lg:leading-[60px]'>Our Story</h1>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="text-center px-4 mb-5 md:mb-0 pt-24 pb-16 max-w-[1240px] m-auto">
                    <p className='text-red-800 font-bold'>Welcome To The India Restaurant</p>
                    <h1 className='text-4xl font-bold max-w-[500px] m-auto pt-2 pb-3'>Delicious Food, Friendly Staff, Cozy Atmosphere & Positive Emotions!</h1>
                    <div className="bg-red-800 w-10 h-1 m-auto"></div>
                    <div className="pt-16 max-w-[1240px] m-auto md:grid grid-cols-2 gap-6 lg:gap-14">
                        <div className="text-center px-4 mb-5 md:mb-0">
                            <img className='h-24 inline-block m-auto' src={logo} alt="" />
                            <p className='text-lg text-[#666666] mb-4 mt-4'>Haji Syed Mohammad Kalim built a small eatery more than 40 years ago to provide lip-smacking Mughlai dishes at pocket-friendly prices. The place garnered immense popularity in no time because they delivered palatable delicacies consistently at a very reasonable range. Today the proprietors of India Restaurant, Syed Anwar Azeem, Syed Misbah Kalim, and Syed Shahmeer Kalim, took forward the legacy of their father to a different dimension. They have collected their father’s dream and changed it into a beautiful reality. The India restaurant currently provides a delightful and vibrant ambiance having a seating arrangement for 300 people. The restaurant now has added heterogeneity in its menu with Indian and Chinese cuisine. This place still holds its roots and swears by serving the best biryani in town. It is also exploring and experimenting with other flavours and cuisines to give new aspects to the place.</p>
                        </div>
                        <div className="px-3">
                            <img src={welcome} alt="Interior" className='w-full m-auto' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="pb-20 max-w-[1240px] m-auto text-center md:grid grid-cols-3 gap-6 lg:gap-14 items-center">
                    <div className="text-center px-4 md:mb-0 mb-4">
                        <h1 className='text-4xl mb-3 font-bold'>Our Mission</h1>
                        <div className="bg-red-800 w-10 h-1 m-auto"></div>
                        <p className='text-lg text-[#666666] mt-4'>To help our customers enjoy simple edible pleasures and reach their hearts through their stomachs.</p>
                    </div>
                    <div className="text-center mb-4">
                        <img src={mission} className='m-auto' alt="" />
                    </div>
                    <div className="text-center px-4 md:mb-0 mb-4">
                        <h1 className='text-4xl mb-3 font-bold'>Our Vision</h1>
                        <div className="bg-red-800 w-10 h-1 m-auto"></div>
                        <p className='text-lg text-[#666666] mt-4'>To create an ultimate destination for every food lover in town and lead them to an extraordinary food journey.</p>
                    </div>
                </div>
            </div>
            
            <div className="">
                <Footer />
            </div>
        </>
    )
}
