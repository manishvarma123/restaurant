import React from 'react';
import interior from '../images/INTERIOR.jpg';

export default function Welcome() {
    return (
        <div className='bg-white'>
            <div className="py-24 max-w-[1240px] m-auto md:grid grid-cols-2 gap-6 lg:gap-14">
                <div className="text-center px-4 mb-5 md:mb-0">
                    <p className='text-red-800 font-bold'>Welcome To</p>
                    <h1 className='text-4xl mb-3 font-bold'>India Restaurant</h1>
                    <div className="bg-red-800 w-10 h-1 m-auto"></div>
                    <p className='text-lg text-[#666666] mb-4 mt-4'>India Restaurant has been serving delightful experiences through the art of cooking for four decades. A cozy, relaxing space combined with flavourful dishes makes it a first choice for every foodie in town. It provides a wide range of items to choose from and lets everyone indulge in an experience of pleasing their taste buds.</p>

                    <p className='text-lg text-[#666666] mb-4'>We provides a wide range of cuisines and dishes to choose from so that every foodie in town has their best experience here.</p>

                    <p className='text-lg text-[#666666]'>We are known to be the best Mughlai eatery in Kolkata. We have always won the hearts of our customers with appetizing dishes and friendly behaviour. It is the best choice for everyone who wants to enjoy the best quality food at reasonable prices.</p>
                </div>
                <div className="px-3">
                    <img src={interior} alt="Interior" className='w-full m-auto' />
                </div>
            </div>
        </div>
    )
}
