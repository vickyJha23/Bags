import React from 'react'
import { FaEye, FaMinus, FaPlus } from "react-icons/fa";


const SmallCard = ({ product }) => {
  return (
    <div id='smallCard' className='w-full h-full border-2 border-yellow-600 rounded-md py-2 px-3 relative !-z-50'>
    <img src="https://bags-workdo.myshopify.com/cdn/shop/products/2_4985da47-8861-4eab-bc3f-77ce33213698_600x600.png?v=1682060666" alt="()" className='w-full h-full object-cover mx-auto' /> 
    <button className='text-white absolute top-2 right-2 bg-primaryColor w-6 h-6 grid place-items-center shadow rounded-md rotate-90'>        
        <FaEye  size={15}/>
    </button>
    <div className='w-full h-1/2 text-white space-y-1'>
         <h6 className='text-sm text-tertiaryColor'>Go Hustle</h6>
         <h3 className='text-lg font-semibold'>William Backpack</h3>
         <p className='text-sm text-wrap text-ellipsis '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde natus error amet assumenda blanditiis molestiae.</p> 
         <div className='w-full flex items-center justify-between !mt-2'>
              <div className='space-x-1'>
                   <span className='w-[15px] h-[15px] inline-block border border-3 rounded-full relative'>
                       <span className='w-[10px] h-[10px] inline-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-400 rounded-full'></span> 
                   </span>
                   <span className='w-[15px] h-[15px] inline-block border border-3 rounded-full relative'>
                       <span className='w-[10px] h-[10px] inline-block rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-pink-400'></span>
                   </span>
               </div>
            <div className='flex gap-2 items-center'>
                <p className='text-lg'>Rs.1800</p>
                <p className='text-tertiaryColor line-through text-sm'>Rs.1600</p>
            </div>
        </div>    
         <div className='w-full h-[35px] flex justify-between py-1 !mt-2'>
                <div className='w-[80px] h-full border rounded-full hidden lg:flex justify-evenly items-center overflow-hidden'>
                    <button className='w-full h-full text-center'>  
                        <FaMinus size={10} className='mx-auto'/>
                    </button>
                    <span className='w-full h-full inline-block text-center'>1</span>
                    <button className='w-full h-full'>
                        <FaPlus size={10} className='mx-auto'/>
                    </button>
                </div>
                <div className='h-full px-3 py-4 lg:py-2 bg-primaryColor rounded-full flex items-center'>
                     <button className='text-sm'>
                           Add To Cart
                     </button>
                </div>
            </div>
    </div>
</div>  
  )
}

export default SmallCard
