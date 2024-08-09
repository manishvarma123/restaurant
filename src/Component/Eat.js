import React from 'react';
import eat from '../images/eat-food.jpg';

export default function () {
  return (
    <div className='w-screen bg-fixed bg-center' style={{backgroundImage:`url(${eat})`}}>
        <div className="py-28 bg-black/45 text-center text-white">
            <p>We Create Delicious Memories</p>
            <h1 className='text-5xl font-bold'>Eat Good Feel Good</h1>
        </div>
    </div>
  )
}
