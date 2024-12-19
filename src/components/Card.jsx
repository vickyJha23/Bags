import React, { useEffect } from 'react'
import { FaEye } from "react-icons/fa";
import CounterComponent from './CounterComponent'
import Button from "./Button";

// component imports
import CardModal from './CardModal';
import PriceDisplayer from './PriceDisplayer';
import useModalStore from '../zustand-store/ModalStore';




const Card = ({product}) => {
  const initializeModal = useModalStore((state) => state.initializeModal)
  const openModal = useModalStore((state) => state.openModal);
  const setProductColor = useModalStore((state) => state.setProductColor);
  const productColor = useModalStore((state) => state.modals[product.id]?.productColor);
  const setSelectedProduct = useModalStore((state) => state.setSelectedProduct)
  const selectedProduct = useModalStore((state) => state.modals[product.id]?.selectedProduct);
  const handleActiveIndex = useModalStore((state) => state.handleActiveIndex);
  const activeIndex = useModalStore((state) => state.activeIndex);

  useEffect(() => {
    initializeModal(product.id, product.variants[0].color, product) 
  }, [initializeModal, product.id, product.variants, product]) 

 useEffect(() => {
     console.log("Har Har Mahdev");
     if(productColor) {return setSelectedProduct(product.id, productColor, product)};
 }, [productColor, product.id, product]) 

  return (
   <div data-id={product.id} className='mb-4 relative z-10'> 
    <div className='rounded-[25px] bg-secondaryColor shadow-md  border border-borderColor py-2'>
     <div className='w-full h-full relative z-10'>
           <img src={selectedProduct ? selectedProduct.images[0] : product?.variants[0]?.images[0]} alt="()" className='w-full h-full object-cover' />
           <button onClick={() => openModal(product.id)} className='bg-primaryColor text-white grid place-items-center w-6 h-6 rotate-90 absolute top-3 right-3 rounded-md'>
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
                      return  <button onClick={() => {setProductColor(product.id, variant.color)
                             handleActiveIndex(index)
                      }} key={index} className={`border rounded-full w-4 h-4 p-2 relative transition-all duration-200 ease-linear ${activeIndex === index ? "w-5 h-5": ""}`}>
                     <span className='inline-block w-3 h-3  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' style={{
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
    <CardModal cardID = {product.id} product={product}/>
</div>
  )
}

export default Card
