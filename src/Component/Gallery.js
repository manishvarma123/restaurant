import React from 'react';
import banner from '../images/gallery-banner.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg';
import img13 from '../images/img13.jpg';
import img14 from '../images/img14.jpg';
import img15 from '../images/img15.jpg';
import img16 from '../images/img16.jpg';
import img17 from '../images/img17.jpg';
import Footer from './Footer';

export default function Gallery() {
    return (
        <>
            <div className="h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
                <div className="w-full h-full flex items-center justify-center bg-black/35">
                    <div className="text-white text-center max-w-[1140px] px-3">
                        <h1 className='text-3xl md:text-6xl font-bold mb-4 lg:leading-[60px]'>Our Gallery</h1>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="py-28 max-w-[1240px] m-auto md:grid md:grid-cols-2 lg:grid-cols-3">
                    <div className="overflow-hidden m-4 md:m-2 lg:m-2">
                        <img src={img1} alt="img1" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-2 lg:m-2">
                        <img src={img2} alt="img2" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img3} alt="img3" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img4} alt="img4" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img5} alt="img5" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img6} alt="img6" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img7} alt="img7" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img8} alt="img8" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img9} alt="img9" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img10} alt="img10" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img11} alt="img11" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img12} alt="img12" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img13} alt="img13" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img14} alt="img14" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img15} alt="img15" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img16} alt="img16" />
                    </div>
                    <div className="overflow-hidden m-4 md:m-3 lg:m-2">
                        <img src={img17} alt="img17" />
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}
