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
import useModalStore from '../zustand-store/ModalStore';
import { shallow } from 'zustand/shallow';

let counter = 0;
const CardModal = ({product}) => {
    const initializeModal = useModalStore((state) => state.initializeModal);
    const visible = useModalStore((state) => {
        const modal = state.modals.find((modal) => modal.id === product.id);
        return modal?.visible;
       }, shallow);
    const modals = useModalStore((state) => state.modals);
     console.log(modals);      
    const modalSelectedColor = useModalStore((state) => {
         const modal = state.modals.find((modal) => modal.id === product.id);
         return modal?.selectedColor;
    })
    const makeModalHide = useModalStore((state) => state.makeModalHide);
    const updateModalSelectedProductAndColor = useModalStore((state) => state.updateModalSelectedProductAndColor);
    const selectedProduct = useModalStore((state) => {
          const modal = state.modals.find((modal) => modal.id === product.id);
          return modal?.selectedProduct;
    })
    useEffect(() => {
        initializeModal(product.id);
    }, [product.id])
  
    if(!visible){
        return null;
    }


    return (
    <div id='cardModal' className='w-full min-h-screen  bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 grid place-items-center' style={{
        zIndex: 99999  
    }}>
         <div className='w-[95vw] h-[90vh] md:h-[480px] px-4 py-10 lg:py-16 max-w-screen-md mx-auto bg-slate-300 rounded-md grid grid-rows-[auto,1fr] relative  !overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-secondaryColor scrollbar-track-white md:!overflow-hidden' style={{
            zIndex:1000
         }}>
             <div className='h-auto'>
                  <button onClick={() => makeModalHide(product.id)} className='absolute top-3 right-3'>
                     <FaTimes size={28} />
                 </button>       
             </div>   
             <div className='w-full max-w-full grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-2'>
                 <div className='w-full max-w-full'>
                    <Swiper className='w-full !max-w-full h-full'
                     modules={[Navigation]}
                     navigation
                     slidesPerView={1}
                     cssMode={true}
                     watchSlidesProgress={true}
                     resizeObserver={true}
                    > 
                        { selectedProduct?.images.map((image, index) => (<SwiperSlide key={index}>
                           <div className='w-full max-w-[350px] h-full flex justify-center mx-auto'>
                              <img src={image} alt="()" className='w-full h-full object-cover' />
                           </div>
                       </SwiperSlide>))}
                        
                    </Swiper>
                 </div>
                 <div className='space-y-4 w-full max-w-full'>
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
                        <select onChange={(e) => updateModalSelectedProductAndColor(product.id, product, e.target.value)} value={modalSelectedColor} className='block w-full lg:w-4/5 focus:outline-none rounded-[25px] border border-black bg-transparent px-3 py-2' name="color" id="color-select">
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
