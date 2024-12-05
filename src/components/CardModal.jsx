import React, { useState, useEffect } from 'react'
import { FaTimes } from "react-icons/fa";


// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

// swiper css imports
import 'swiper/css';
import 'swiper/css/navigation';



// import components
import PriceDisplayer from './PriceDisplayer';
import CounterComponent from './CounterComponent';
import Button from './Button';


const CardModal = ({isVisible, setIsVisible, product}) => {
     const [productColor, setProductColor] = useState(product.variants[0]?.color || "black");
     const [selectedVariant, setSelectedVariant] = useState({});
      const handleProductColor = (e) => {
            const { value } = e.target;
            setProductColor(value);   
        }  
 
      useEffect( () => {
        const colorVariant = product.variants.find((variant) => variant.color === productColor);
        setSelectedVariant(colorVariant);
      }, [productColor])
          
 
     if(!isVisible){
         return null;
    }


    return (
    <div className='w-full min-h-screen bg-[rgba(0,0,0,0.5)] !fixed top-0 left-0 grid place-items-center z-[9999]'>
         <div className='w-full h-[480px] px-4 py-10 max-w-screen-md mx-auto bg-white rounded-md grid grid-rows-[auto,1fr] relative'>
             <div className='h-[50px]'>
                  <button onClick={setIsVisible} className='absolute top-3 right-3'>
                     <FaTimes size={28} />
                 </button>       
             </div>   
             <div className='grid grid-cols-2 gap-2 h-full'>
                 <div className='w-full h-full'>
                    <Swiper className='w-full h-full'
                     modules={[Navigation]}
                     navigation
                     slidesPerView={1}
                     cssMode={true}
                    > 
                       {selectedVariant.images.map((image, index) => (<SwiperSlide className='w-full h-full' key={index}>
                           <div className='w-full h-full'>
                              <img src={image} alt="()" className='w-full h-full object-cover' />
                           </div>
                       </SwiperSlide>))}
                        
                    </Swiper>
                 </div>
                 <div className='space-y-4'>
                    <h1 className='text-4xl font-bold'>
                        {product.brand}
                    </h1>
                    <p className='text-xs'>
                        {product.description}
                    </p>
                         {/* // htmlFor used for linking this label with the select  */}
                    <div className=''>
                        <label className='block' htmlFor="color-select">
                            Color:
                         </label>
                        <select onChange={handleProductColor} value={productColor} className='block w-4/5 focus:outline-none rounded-[25px] border border-black bg-transparent px-3 py-2' name="color" id="color-select">
                             {product.variants.map((variant, index) => {
                                  return  <option  key={index} value={variant.color}>{variant.color}</option>
                             })}                                      
                        </select>
                    </div>
                    <PriceDisplayer currentPrice="Rs. 1600" originalPrice="Rs. 1800" />
                    <div className='flex justify-between items-center'>
                       <Button content='Add to Cart' /> 
                       <CounterComponent />
                    </div>
                 </div>   
             </div>   
            
            </div>  
    </div>
  )
}

export default CardModal
