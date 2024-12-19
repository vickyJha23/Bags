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

// component import 
import Button from './Button';


const Hero = () => {
  return (
    <div className='w-full h-auto py-4 lg:py-0 lg:h-[70vh] bg-secondaryColor relative select-none'>
            <div className='w-full lg:w-2/3 absolute top-0 left-0 z-0 h-full bg-no-repeat bg-center bg-cover grid place-items-center' style={{
                 backgroundImage: `url(${images.homeBanner})`
            }}>   
            </div>
           <div className='w-full h-full max-w-screen-2xl mx-auto flex justify-center items-center'>
           <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true,
         renderBullet: function (_,className){
            return `<span class="${className}">
                    <span class="inline-block w-[8px] h-[8px] !bg-white absolute z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
             </span>`
         }
      }}
      cssMode={true}
      mousewheel={true}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      className='w-full h-full !flex !justify-center !items-center'
    >

              {heroBannerData.map((banner, index) => {
                  return <SwiperSlide key={index} className=''>
                           <div className='grid md:grid-cols-4 lg:grid-cols-3'>
                           <div className='w-full md:col-span-4 flex flex-col justify-center space-y-4  px-5 md:py-10 lg:py-0 lg:col-auto'>
                                <h1 className='text-white font-bold text-4xl md:w-full lg:w-[70%]'>{banner.sectionTitle}</h1>
                                <p className='text-white text-xs'>{banner.sectionDescription}</p>
                                 <Button content='show Product' />
                             </div>
                             <div className='w-full h-full flex justify-center md:col-span-2 items-center lg:col-auto'>
                                <img src={banner.product.images.img1} alt="()" className=' w-[75%] md:max-w-full object-contain' />
                              </div>
                             <div className='flex flex-col justify-center px-5 space-y-3 md:col-span-2 lg:col-auto'>
                                  <p className='text-white'>{banner.product.brand}</p>
                                   <h3 className='text-white font-bold text-2xl'>{banner.product.title}</h3>   
                                   <p className='text-white text-xs'>{banner.product.description}</p>
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
                                  <div className='flex items-end lg:items-start space-x-2 md:space-y-4 lg:space-x-0 lg:flex-col'>
                                       <div className='border w-32 flex justify-between items-center px-2 rounded-[25px]'>
                                          <button className='py-2 lg:text-lg text-white flex justify-center items-center'>
                                           <TiMinus />
                                         </button>
                                         <span className='text-white lg:text-lg py-2 flex justify-center items-center'>1</span>
                                         <button className='py-2 flex items-center justify-center lg:text-lg text-white'>
                                           <TiPlus />
                                          </button>
                                       </div>
                                      <div className='flex items-center'>
                                        <Button content='Add to Cart' />
                                      </div>
                                  </div> 
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
