import React from 'react';
import testimonial from '../images/TESTIMONIAL.jpg';

export default function Testimonial() {
    return (
        <div className='h-screen' style={{ backgroundImage: `url(${testimonial})` }}>
            <div className="bg-black/45 h-full">
                <div className="py-16 md:py-28 max-w-[1240px] m-auto text-center">
                    <p className='text-yellow-500 font-bold mb-2'>People Talk</p>
                    <h1 className='text-white text-4xl mb-4 font-bold'>Our Testimonial</h1>
                    <div className="bg-yellow-500 w-10 h-1 m-auto"></div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner mt-5">
                            <div class="carousel-item active">
                                <div className="lg:grid grid-cols-3 gap-8 px-8">
                                    <div className="w-full min-h-[350px] bg-white"></div>
                                    <div className="hidden lg:block w-full min-h-[350px] bg-white"></div>
                                    <div className="hidden lg:block w-full min-h-[350px] bg-white"></div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="lg:grid grid-cols-3 gap-8 px-8">
                                    <div className="w-full min-h-[350px] bg-white"></div>
                                    <div className="hidden lg:block w-full min-h-[350px] bg-white"></div>
                                    <div className="hidden lg:block w-full min-h-[350px] bg-white"></div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="lg:grid grid-cols-3 gap-8 px-8">
                                    <div className="w-full min-h-[350px] bg-white"></div>
                                    <div className="hidden lg:block w-full min-h-[350px] bg-white"></div>
                                    <div className="hidden lg:block w-full min-h-[350px] bg-white"></div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
