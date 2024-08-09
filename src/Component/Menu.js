import React from 'react';
import banner from '../images/MENU.jpg';
import speciality from '../images/our-speciality-menu.jpg';
import soups from '../images/soups-menu.jpg';
import snacks from '../images/snacks-menu.jpg';
import tandoori1 from '../images/kebab-1.jpg';
import tandoori2 from '../images/kebab-2.jpg';
import tandoori3 from '../images/kebab-3.jpg';
import kebab from '../images/kebab-1-1.jpg';
import biryani from '../images/biryani-menu.jpg';
import mutton from '../images/mutton-soups.jpg';
import chicken from '../images/chicken-menu.jpg';
import vegetarian from '../images/veg-menu.jpg';
import rice from '../images/rice.jpg';
import chinese1 from '../images/chinese-1.jpg';
import chinese2 from '../images/chinese-2.jpg';
import chinese3 from '../images/chinese-3.jpg';
import desserts from '../images/desert-menu.jpg';
import mocktails from '../images/mocktails.jpg';
import Footer from '../Component/Footer';
import $ from 'jquery';



export default function Menu() {
  
      $(document).ready(function () {
        $(".filter-button").click(function () {
          var value = $(this).attr("data-filter");
  
          if (value == "all") {
            // $('.filter').removeClass('hidden');
            $(".filter").show("1000");
          } else {
                      //  $('.filter[filter-item="'+value+'"]').removeClass('hidden');
                      //  $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter")
              .not("." + value)
              .hide("3000");
            $(".filter")
              .filter("." + value)
              .show("3000");
          }
        });
  
        if ($(".filter-button").removeClass("active")) {
          $(this).removeClass("active");
        }
        $(this).addClass("active");
      });
    
  return (
    <>
      <div className="h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
        <div className="w-full h-full flex items-center justify-center bg-black/35">
          <div className="text-white text-center max-w-[1140px] px-3">
            <h1 className='text-3xl md:text-6xl font-bold mb-4 lg:leading-[60px]'>Our Menu</h1>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="text-center px-4 mb-5 md:mb-0 pt-24 pb-16 max-w-[1240px] m-auto">
          <p className='text-red-800 font-bold'>Taste The Best</p>
          <h1 className='text-4xl font-bold max-w-[500px] m-auto pt-2 pb-3'>Discover Our Menu</h1>
          <div className="bg-red-800 w-10 h-1 m-auto"></div>
          <p className='max-w-[550px] m-auto text-lg text-[#666666] mb-4 pt-4'>Even if you're not a great chef, there's nothing to stop you understanding the difference between what tastes good and what doesn't.</p>
        </div>
      </div>

      <div class="max-w-[1140px] m-auto mt-20">
        <ul class="text-center mb-10">
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="all">All</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="speciality">Our Speciality</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="soups">Soups</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="snacks">Snacks</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="tandoori">Tandoori & Kebabs</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="kebab">Kebab in Butter Masala</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="biryani">Biryani</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="mutton">Mutton in Gravy</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="chicken">Chicken in Gravy</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="vegetarian">Vegetarian</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="rice">Rice,Roti & Naan</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="chinese">Chinese</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="desserts">Desserts</a></li>
          <li className='px-[20px] py-[20px] inline-block'><a className="filter-button rounded-lg cursor-pointer text-white bg-red-700 px-[10px] py-[5px]" data-filter="mocktails">Mocktails</a></li>
        </ul>

        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="filters-content">
              <div class="row align-items-center justify-content-center m-auto max-w-[750px] px-4">

                <div class="col-sm-12 col-md-12 col-lg-12 filter all speciality">
                  <div class="menu-item pb-10">
                    <img src={speciality} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all soups" >
                  <div class="menu-item pb-10">
                    <img src={soups} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all snacks">
                  <div class="menu-item pb-10">
                    <img src={snacks} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all tandoori">
                  <div class="menu-item pb-10">
                    <img src={tandoori1} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all tandoori">
                  <div class="menu-item pb-10">
                    <img src={tandoori2} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all tandoori" >
                  <div class="menu-item pb-10">
                    <img src={tandoori3} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all kebab" >
                  <div class="menu-item pb-10">
                    <img src={kebab} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all biryani" >
                  <div class="menu-item pb-10">
                    <img src={biryani} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all mutton">
                  <div class="menu-item pb-10">
                    <img src={mutton} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all chicken">
                  <div class="menu-item pb-10">
                    <img src={chicken} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all vegetarian">
                  <div class="menu-item pb-10">
                    <img src={vegetarian} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all rice">
                  <div class="menu-item pb-10">
                    <img src={rice} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all chinese">
                  <div class="menu-item pb-10">
                    <img src={chinese1} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all chinese">
                  <div class="menu-item pb-10">
                    <img src={chinese2} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all chinese">
                  <div class="menu-item pb-10">
                    <img src={chinese3} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all desserts">
                  <div class="menu-item pb-10">
                    <img src={desserts} alt="" />
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 filter all mocktails">
                  <div class="menu-item pb-10">
                    <img src={mocktails} alt="" />
                  </div>
                </div>


              </div>
            </div>


          </div>
        </div>

      </div>

      <Footer />





    </>
  )
}
