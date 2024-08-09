import React, { useState } from 'react';
import img from '../images/img17.jpg';
import { Link } from 'react-router-dom';

export default function Login() {

  return (
    <div className='w-screen h-screen' style={{ backgroundImage: `url(${img})` }}>
      <div className="bg-black/80 wi-full h-full flex justify-center items-center">
        <div className="w-[400px] mx-4 py-16 px-10 bg-white text-center rounded-lg">
          <form id="form" action="login.php" method='post'>
            <h1 className='text-2xl font-bold mb-3'>Login</h1>
            <div className="">
              <input type="email" id='email' required className='rounded-sm inline-block w-full border-[3px] border-gray-300 px-3 py-2 mb-3' placeholder='Email' name='email'/>
              <div id='email' className="text-[#ff3860] text-left text-[9px]"></div>
            </div>
            <div className="">
              <input type="password" id='password' required className='rounded-sm inline-block w-full border-[3px] border-gray-300 px-3 py-2 mb-3' placeholder='Password' name='password' />
              <div id='password' className="text-[#ff3860] text-left text-[9px] mb-3"></div>
            </div>
            <a href='' className='text-red-700 mb-3 inline-block'>Forgot password?</a>
            <button type="submit" className='rounded-sm bg-red-700 text-white font-bold inline-block w-full px-3 py-2 mb-3' name='login'>Login</button>
            <p>Don't have an account? <Link className='text-red-700' to="/Signup">Signup</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}
