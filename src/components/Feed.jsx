import React from 'react'

// component imports
import Card from './Card'



// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

// swiper css 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

// static data
const Feed = ({ products = [], isPaginationRequired = false }) => {
  if(products.length === 0){
        return null;
  }
  return (
    <div id="bagCardContainer" className='mt-8 w-full h-full'>
         <Swiper className='w-full h-full' modules={[Navigation, Pagination]}
         speed={2000}
         breakpoints={{
             0: {
              slidesPerView: 1,
             },             
             640: {
               slidesPerView: 2,
             },
             1024: {
              slidesPerView: 3,
             }
         }} spaceBetween={20} slidesPerView={3}   // Ensure swiping is allowed on all elements
      grabCursor={true} cssMode={true} draggable={true} navigation
      pagination={
        isPaginationRequired ? {clickable: true,
        renderBullet: function(_, className){
          return `<span class="${className}">
          <span class="inline-block w-[5px] h-[5px] !bg-white absolute z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
   </span>`
        }


        }:false
      }
      >
            {products.map((product, index) => {
              return <SwiperSlide key={index} className='!transform-none'>
                     <Card  product={product} />
                 </SwiperSlide>
              })}
         </Swiper>
    </div>
  )
}

export default Feed
