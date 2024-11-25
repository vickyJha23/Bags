import React from 'react'
import { TiMinus, TiPlus } from "react-icons/ti";
import images from '../assets/images/image'
import { heroBannerData } from '../assets/data';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Hero = () => {
  return (
    <div className='w-full h-screen lg:h-[70vh] bg-secondaryColor relative select-none'>
            <div className='w-full lg:w-2/3 absolute top-0 left-0 z-0 h-full bg-no-repeat bg-center bg-cover grid place-items-center' style={{
                 backgroundImage: `url(${images.homeBanner})`
            }}>   
            </div>
           <div className='w-full h-full flex items-center'>
           <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='z-10'
    >

              {heroBannerData.map((banner, index) => {
                  return <SwiperSlide key={index} className=''>
                           <div className='grid grid-cols-3'>
                           <div className='w-full flex flex-col justify-center px-24 space-y-4'>
                                <h1 className='text-white font-bold text-4xl'>{banner.sectionTitle}</h1>
                                <p className='text-tertiaryColor'>{banner.sectionDescription}</p>
                                 <button className='bg-primaryColor w-32 px-3 py-2 text-white rounded-[25px]'>
                                     show product
                                 </button>
                             </div>
                             <div className=''>
                                  <img src={banner.product.images.img1} alt="" />
                             </div>
                             <div className='flex flex-col space-y-3 px-24'>
                                  <p className='text-white'>{banner.product.brand}</p>
                                   <h3 className='text-white font-bold text-2xl'>{banner.product.title}</h3>   
                                   <p className='text-white text-sm'>{banner.product.description}</p>
                                   <div className='space-x-1'>
                                      {banner.product.colors.map((color, index) => (
                                         <button key={index} style={{
                                              background: color
                                         }} className={`w-3 h-3 rounded-full border border-[#ccc]`}>
                                         </button>
                                      ))}
                                   </div>
                                   <p className='space-x-2'>
                                      <span className='text-white'>
                                          Rs. {banner.product.price.current}
                                      </span>
                                      <span className='text-tertiaryColor line-through text-xs'>
                                           Rs.{banner.product.price.original}
                                      </span>
                                   </p>
                                  <div className='border w-28 flex justify-between px-2 rounded-[25px]'>
                                       <button className='py-1 text-lg text-white'>
                                           <TiMinus />
                                       </button>
                                       <span className='text-white text-lg py-1'>1</span>
                                       <button className='py-1 text-lg text-white'>
                                           <TiPlus />
                                       </button>
                                  </div> 
                                  <button className='bg-primaryColor w-28 px-3 py-2 text-white rounded-[20px]'>
                                      Add to Cart
                                  </button>
                             </div>   
                           </div>
                        </SwiperSlide>                   
                   })}
             </Swiper>    
          </div> 
    </div>
  )
}

export default Hero
