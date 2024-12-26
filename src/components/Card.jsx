import React, { useEffect } from 'react'
import { FaEye } from "react-icons/fa";
import { shallow } from 'zustand/shallow';
import CounterComponent from './CounterComponent'
import Button from "./Button";

// component imports
import CardModal from './CardModal';
import PriceDisplayer from './PriceDisplayer';
import useModalStore from '../zustand-store/ModalStore';
import useCardStore from '../zustand-store/CardStore';

const Card = ({ product }) => {
   const makeModalVisible = useModalStore((state) => state.makeModalVisible);
   const initializeCard = useCardStore((state) => state.initializeCard);
   const setActiveIndex = useCardStore((state) => state.setActiveIndex);
   const updateProductVariant = useCardStore((state) => state.updateProductVariant);

   const activeIndex = useCardStore((state) => {
       const card = state.cards.find((card) => card.id === product.id);
       return card?.activeIndex;
   })
   
  const image = useCardStore((state) => {
      const card = state.cards.find((card) => card.id === product.id);
      return card?.image;
  }) 


  useEffect(() => {
      initializeCard(product.id, product, product.variants[0].color);
  }, [product.id, product, initializeCard])
  return (
   <div data-id={product.id} className='mb-4'> 
    <div className='rounded-[25px] bg-secondaryColor shadow-md  border border-borderColor py-2'>
     <div className='w-full h-full relative z-10'>
           <img src={image} alt="()" className='w-full h-full object-cover' />
           <button onClick={() => {
              makeModalVisible(product.id, product);
           }} className='bg-primaryColor text-white grid place-items-center w-6 h-6 rotate-90 absolute top-3 right-3 rounded-md'>
                <FaEye />
           </button> 
     </div>
    <div className='text-white px-4 space-y-3'>
         <h4 className='text-sm font-thin'>{product.brand}</h4>
         <h3 className='font-bold'>
           {product.name}
         </h3>
         <p className='text-sm'>
           {product.description}
         </p>
         <div className='flex justify-between'>
             <div className='space-x-2 flex justify-center items-center'>
                  {product.variants.map((variant, index) => {
                      return  <button onClick={() => {
                         setActiveIndex(product.id, index);
                         updateProductVariant(product.id, product, variant.color)
                      }} key={index} className={`border rounded-full relative transition-all duration-200 ease-linear  ${activeIndex === index ? "w-5 h-5 p-2 shadow-md shadow-black": "w-2 h-2 p-[6px]"}`}>
                     <span className={`inline-block rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${activeIndex === index ? "w-4 h-4" : "w-2 h-2"}`} style={{
                      backgroundColor: variant.color
                     }}></span>
                 </button>
                  })}              
               </div>
           <PriceDisplayer currentPrice={"Rs. "+product.price.current} originalPrice={"Rs. "+product.price.originalPrice} />
         </div>
         <div className='flex items-start flex-col lg:flex-row lg:justify-between lg:items-center'>
              <CounterComponent />
              <Button content='Add to Cart' /> 
         </div>
    </div>
</div>
    <CardModal product={product} />
</div>
  )
}

export default Card
