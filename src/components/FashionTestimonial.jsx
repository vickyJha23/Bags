import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

// component import
import StarRating from './StarRating';


const FashionTestimonial = () => {
  return (
     <section className='py-4'>
        <div className='grid lg:grid-cols-2 gap-8 h-full place-items-center px-3 lg:px-0'>
            <div className='hidden lg:block w-full h-full'>
                <img src="https://i.ytimg.com/vi/RtYk-ixyWuM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC8FgcBOQQsVirpa-xLLW7uQqlZ0g" alt="()" className='w-full max-h-full object-cover rounded-tr-[20px] rounded-br-[20px]' />
            </div>
            <div className='text-white space-y-4'>
                 <div className='space-y-4'>
                    <p>
                       <FaQuoteLeft size={40} className='text-primaryColor' />
                     </p>
                     <p>
                         <small>Testimonials</small>
                      </p>
                 </div>
                 <div className='space-y-4'>
                    <h2 className='font-bold text-xl'>Fashionably Functional</h2>
                    <p className='text-xs lg:w-[70%]'>For paper bags, slogans like that we can use instead of using plastic we should use paper bags. Slogans are used to highlight the brand image and make it more remarkable in the eye of the consumer</p>
                 </div>
                 <div className='flex items-center justify-start gap-12'>
                     <div className='flex items-center gap-2'>
                        <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="()" className='w-[50px] h-[50px] rounded-full' />
                        <p className='flex space-x-1'>
                          <span className='font-bold'>
                              Sophia,
                          </span> 
                            <span className='font-thin text-slate-300'>
                              Client
                          </span>
                         </p>
                     </div>
                     <div>
                         <StarRating rating={3} /> 
                     </div> 
                 </div>
            </div>
        </div>  
     </section>
  )
}

export default FashionTestimonial
