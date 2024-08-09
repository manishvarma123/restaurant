import React from 'react';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';

export default function
    () {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <ol class="carousel-indicators bottom-10">
                        <li data-target="#carouselExampleFade" data-slide-to="0" className="active rounded-[50%]" style={{width:'20px', height:'20px'}}></li>
                        <li data-target="#carouselExampleFade" data-slide-to="1" className='rounded-[50%]' style={{width:'20px', height:'20px'}}></li>
                        <li data-target="#carouselExampleFade" data-slide-to="2" className='rounded-[50%]' style={{width:'20px', height:'20px'}}></li>
                        <li data-target="#carouselExampleFade" data-slide-to="3" className='rounded-[50%]' style={{width:'20px', height:'20px'}}></li>
                        <li data-target="#carouselExampleFade" data-slide-to="4" className='rounded-[50%]' style={{width:'20px', height:'20px'}}></li>
                    </ol>
                    <div className="carousel-item active h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${one})` }}>
                        <div className="w-full h-full flex items-center justify-center bg-black/25">
                            <div className="text-white text-center max-w-[1140px] px-3">
                                <p className='text-xl md:text-2xl'>When Flavours meet Passion, Magic happens.</p>
                                <h1 className='text-3xl md:text-5xl font-bold mb-4 lg:leading-[60px]'>Come Join Us For a magical Experience.</h1>
                                <a href="/"><button className='hover:bg-black duration-500 text-white font-bold bg-[#d3a971] px-[30px] py-[12px]'>View Menu</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${two})` }}>
                        <div className="w-full h-full flex items-center justify-center bg-black/25">
                            <div className="text-white text-center max-w-[1140px] px-3">
                                <h1 className='text-3xl md:text-5xl font-bold mb-4 lg:leading-[60px]'>Our Dishes Will Soothe Your Eyes, Nourish Your Palate And Gratify Your Soul.</h1>
                                <a href="/"><button className='text-white font-bold border-2 border-solid border-white px-[30px] py-[12px] hover:bg-white'>Book A Table</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${three})` }}>
                        <div className="w-full h-full flex items-center justify-center bg-black/25">
                            <div className="text-white text-center max-w-[1140px] px-3">
                                <h1 className='text-3xl md:text-5xl font-bold mb-4 lg:leading-[60px]'>A Ticket To A Heavenly Food Experience.</h1>
                                <a href="/" ><button className='text-white font-bold bg-[#d3a971] px-[30px] py-[12px]'>View Menu</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${four})` }}>
                        <div className="w-full h-full flex items-center justify-center bg-black/25">
                            <div className="text-white text-center max-w-[1140px] px-3">
                                <h1 className='text-3xl md:text-5xl font-bold mb-4 lg:leading-[60px]'>Fascinating Food + Admirable Ambience + Significant Staff = India Restaurant.</h1>
                                <a href="/"><button className='text-white font-bold bg-[#d3a971] px-[30px] py-[12px]'>View Menu</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${five})` }}>
                        <div className="w-full h-full flex items-center justify-center bg-black/25">
                            <div className="text-white text-center max-w-[1140px] px-3">
                                <h1 className='text-3xl md:text-5xl font-bold mb-4 lg:leading-[60px]'>Add A Special Touch To Your Regular Days With Our Delicious Dishes.</h1>
                                <a href="/"><button className='text-white font-bold bg-[#d3a971] px-[30px] py-[12px]'>View Menu</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
        </div>
    )
}
