import React from 'react'
import { TiMinus, TiPlus } from "react-icons/ti";


const CounterComponent = () => {
  return (
    <div className='flex items-center border-2 overflow-hidden border-[#ccc] rounded-[20px]'>
         <button className='px-3 py-2 text-lg'>
              <TiMinus />      
         </button> 
         <span className='inline-block px-3 py-1 text-lg'>1</span>
         <button className='px-3 py-2 text-lg'>
            <TiPlus />
         </button>
    </div>
  )
}

export default CounterComponent
