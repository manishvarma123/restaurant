import React from 'react';
import mugali from '../images/MUGALI.jpg';
import indian from '../images/INDIAN.jpg';
import chinese from '../images/CHINESE.jpg';

export default function
    () {
    return (
        <div className='bg-white'>
            <div className="py-16 md:py-28 max-w-[1240px] m-auto text-center">
                <p className='text-red-800 font-bold mb-2'>India Restaurant</p>
                <h1 className='text-4xl mb-4 font-bold'>Our Speciality</h1>
                <div className="bg-red-800 w-10 h-1 m-auto"></div>
                <p className='text-[#666666] text-lg lg:max-w-[700px] m-auto py-4'>We provide a wide range of cuisines and dishes to choose from so that every foodie in town has their best experience with us.</p>
                <div className="lg:grid grid-cols-3 gap-8">
                    <div className="h-[60vh] overflow-hidden mb-5 mx-3 relative">
                        <img src={mugali} className='absolute top-0 h-full w-full hover:scale-125 duration-700' alt="Mughlai" />
                        <h1 className='absolute bottom-5 left-0 right-0 text-white text-3xl font-bold'>Mughlai</h1>
                    </div>
                    <div className="h-[60vh] overflow-hidden mb-5 mx-3 relative">
                        <img src={indian} className=' h-full w-full hover:scale-125 duration-700' alt="Indian" />
                        <h1 className='absolute bottom-5 left-0 right-0 text-white text-3xl font-bold'>Indian</h1>
                    </div>
                    <div className="h-[60vh] overflow-hidden mb-5 mx-3 relative">
                        <img src={chinese} className='absolute h-full w-full hover:scale-125 duration-700' alt="Chinese" />
                        <div className="absolute bg-black/40 w-full h-full"></div>
                        <h1 className='absolute bottom-5 left-0 right-0 sm:text-white hover:text-red-900 text-3xl font-bold'>Chinese</h1>
                    </div>
                </div>
 
            </div>
        </div>
    )
}
