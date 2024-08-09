import React, { useState } from 'react';
import logo from '../images/white-india.png';
import { Link, Outlet } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";

export default function Nav() {
    let num = 1;
    const show = (e) => {

        if (num == 1) {
            document.getElementById("dropdown").style.display = "block";
            num = 0;
        } else {
            document.getElementById("dropdown").style.display = "none";
            num = 1;
        }
    }

    return (
        <>
            <div className="bg-black sticky top-0 z-50 w-screen">
                <div className="max-w-[1240px] m-auto">
                    <nav class="px-3 flex justify-between items-center">
                        <a class="navbar-brand" href="/"><img className="logo h-[80px]" src={logo} alt="logo  " /></a>
                        <button className='inline-block lg:hidden text-white text-2xl'><Link onClick={() => show()}><FiMenu /></Link></button>
                        <div className="hidden lg:inline-block" id="navbarNav">
                            <ul>
                                <li class="inline-block 
                                active">
                                    <Link class="sm:text-white font-bold mx-3 hover:text-red-700" to="/Home">Home<span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="inline-block 
                                ">
                                    <Link class="sm:text-white font-bold mx-3 hover:text-red-700" to="/About">About Us </Link>
                                </li>
                                <li className="inline-block 
                                ">
                                    <Link class="sm:text-white font-bold mx-3 hover:text-red-700" to="/Menu">Menu</Link>
                                </li>
                                <li className="inline-block 
                                ">
                                    <Link class="sm:text-white font-bold mx-3 hover:text-red-700" to="/Gallery">Gallery</Link>
                                </li>
                                <li className="inline-block 
                                ">
                                    <Link class="sm:text-white font-bold mx-3 hover:text-red-700" to="/Contact">Contact Us</Link>
                                </li>
                                <li className="inline-block 
                                ">
                                    <Link class="py-2 sm:text-white font-bold mx-3 bg-red-700 px-3 rounded-[2px]" to="/Login">Login</Link>
                                </li>
                                {/* <li class="inline-block">
                                    <Link class="py-2 sm:text-white font-bold mx-3 bg-red-700 px-3 rounded-[2px]" to="/Signup">Signup</Link>
                                </li> */}
                            </ul>
                        </div>
                    </nav>
                </div>
                <div id='dropdown' className="hidden bg-black w-screen py-4 pl-2 text-md duration-1000">
                    <ul>
                        <li class="mb-2 active">
                            <Link onClick={() => show()} class="text-white font-bold mx-3 " to="/Home">Home<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="mb-2 ">
                            <Link onClick={() => show()} class="text-white font-bold mx-3 " to="/About">About Us </Link>
                        </li>
                        <li className="mb-2 ">
                            <Link onClick={() => show()} class="text-white font-bold mx-3 " to="/Menu">Menu</Link>
                        </li>
                        <li className="mb-2 ">
                            <Link onClick={() => show()} class="text-white font-bold mx-3 " to="/Gallery">Gallery</Link>
                        </li>
                        <li className="mb-2 ">
                            <Link onClick={() => show()} class="text-white font-bold mx-3 " to="/Contact">Contact Us</Link>
                        </li>
                        <li className="mb-2 ">
                            <Link onClick={() => show()} class="nav-link text-white font-bold mx-3 bg-red-700 px-3 rounded-[2px]" to="/Login">Login</Link>
                        </li>
                        {/* <li class="nav-item">
                            <Link class="nav-link text-white font-bold mx-3 bg-red-700 px-3 rounded-[2px]" to="/Signup">Signup</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
            
            <Outlet />
        </>

    )
}
