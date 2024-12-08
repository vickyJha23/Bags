import React from 'react'


import  {Bags}  from '../assets/data';
import images from '../assets/images/image';

// Components import 
import Feed from './Feed';
import Button from '../components/Button'; 

const FeaturedProducts = () => {
  return (
       <div className='after:content-[""] after:w-full after:h-[60vh] after:bg-secondaryColor after:absolute after:top-0 after:left-0 after:-z-10'>
        <div className='px-3  md:px-3  lg:w-[95vw] max-w-[1180px] overflow-hidden mx-auto'>
         <div className='w-[95vw] max-w-[1180px] mx-auto space-y-4'>
              <h1 className='font-bold text-white text-4xl'>Designs that fits in everything</h1>
               <p className='text-xs text-white'>It could reflect a buisness's goals and personalities through the strong tagline,<br/> and customers usually remember the catchy taglines and attract them.</p>
          </div>
             <Feed products={Bags} />
          </div>
       </div>   
  )
}

export default FeaturedProducts;
