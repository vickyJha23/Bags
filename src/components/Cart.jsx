import React from 'react';
import { LiaTimesSolid } from "react-icons/lia";
import { MdArrowRightAlt } from "react-icons/md";
import useHeaderStore from '../zustand-store/HeaderStore';
import {Link} from "react-router-dom";

const Cart = () => {
    const isCartVisible = useHeaderStore((state) =>state.isCartVisible)  
   const hideCart =  useHeaderStore((state) => state.hideCart);
//    console.log("cart"); 

if(!isCartVisible){
     return null;
}

  return ( <div onClick={(e) => {
        if(!e.target.closest("button") && !e.target.matches("#cartContainer") && !e.target.closest("div#cartContainer")){
              hideCart();
        }
   }} className='w-full min-h-screen fixed z-10 top-0 left-0 bg-[rgba(0,0,0,0.5)]'>
       <div id='cartContainer' className='absolute top-0 right-0 w-full h-full lg:max-w-sm bg-white'>
       <div className='grid h-full grid-rows-[auto,1fr,auto]'>
             <div className='flex h-12 px-6 bg-secondaryColor justify-between items-center text-white'>
                 <div className='flex items-center space-x-2'>
                     <button onClick={hideCart} className='grid place-items-center font-bold'>
                          <LiaTimesSolid size={26} />
                      </button>
                      <h3 className='font-bold text-lg'>My Cart</h3> 
                 </div> 
                 <p>0 items</p>
             </div> 
             <div className='px-3 py-3'>
                 <p>Cart is empty</p>
             </div>
             <div className='h-40 border-t border-t-[#333] px-3 py-3 space-y-4'>
                 <div className='flex justify-between'>
                     <p className='font-bold'>Subtotal:</p>
                     <p className='font-bold'>Rs 0.0</p>
                 </div>
                 <button className='bg-primaryColor w-full py-2 text-white rounded-[40px]'>
                      Proceed to checkout
                 </button>
                 <p className='text-center w-40 text-nowrap mx-auto'>
                    <Link to="" className='flex w-full justify-center items-center space-x-2'>
                        <span>View Cart</span> <MdArrowRightAlt size={28} />
                   </Link>
                 </p>
             </div> 
        </div>  

       </div>
   </div>
  )
}

export default Cart
