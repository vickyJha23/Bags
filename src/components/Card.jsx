import React, { useState, useEffect } from 'react'
import { FaEye } from "react-icons/fa";
import CounterComponent from './CounterComponent'
import Button from "./Button";

// component imports
import CardModal from './CardModal';
import PriceDisplayer from './PriceDisplayer';
import { BiColor } from 'react-icons/bi';

const Card = ({product, id}) => {
  const [isCardModalVisible, setIsCardModalVisible] = useState(false);
  const handleCardVisibility = () => {
      setIsCardModalVisible(prevState => !prevState);
  }
  return (
   <div data-id={id}> 
    <div className='w-auto h-1/2 rounded-[25px] bg-secondaryColor shadow-md  border border-borderColor py-2'>
     <div className='w-full h-auto relative'>
           <img src={product.variants[0].images[0]} alt="()" className='w-full h-full object-cover' />
           <button onClick={handleCardVisibility} className='bg-primaryColor text-white grid place-items-center w-6 h-6 rotate-90 absolute top-3 right-3 rounded-md'>
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
             <div className='space-x-2'>
                  {product.variants.map((variant, index) => {
                      return  <button key={index} className='border rounded-full w-4 h-4 p-2 relative'>
                     <span className='inline-block w-3 h-3  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' style={{
                      backgroundColor: variant.color
                     }}></span>
                 </button>
                  })}              
               </div>
           <PriceDisplayer currentPrice={"Rs. "+product.price.current} originalPrice={"Rs. "+product.price.originalPrice} />
         </div>
         <div className='flex justify-between items-center'>
              <CounterComponent />
              <Button content='Add to Cart' /> 
         </div>
    </div>
</div>
   <CardModal isVisible={isCardModalVisible} setIsVisible={handleCardVisibility} product={product} setFilterColor = {(e) => setFilterColor(e.target.value)} />
</div>
  )
}

export default Card
