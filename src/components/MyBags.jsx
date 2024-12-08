import React from 'react'
import Button from './Button'
import Feed from './Feed'

import { Bags } from '../assets/data'

const MyBags = () => {
   return (
      <div className='w-full h-full'>
         <div className='w-full max-w-[1180px] mx-auto !h-full px-3'>
            <div className='text-center'>
               <h5 className='text-black text-center font-bold'>Bags</h5>
               <h2 className='font-bold text-3xl mt-3 mb-5'>
                  A purse which shows<br />  genteman's gesture
               </h2>
               <p className='lg:w-1/2 text-sm mx-auto text-tertiaryColor mb-5'>
                  Slogans are usually used to emphasize the identity of a brand and make it more reputable in terms of
                  buisness. Short and eye-catching bag advertisements slogans will be beneficial for advertising the brand.
               </p>
               <Button content='show Product' />
            </div>
            <Feed products={Bags} isPaginationRequired={true} />

         </div>
         {/* Categories section */}
         <div style={{
            background: `url("https://bags-workdo.myshopify.com/cdn/shop/files/cat-bnr.png?v=1682418988")`
         }} className='w-full h-full bg-center bg-no-repeat bg-cover -mt-[220px]'>
            <div className='w-full max-w-[1180px] mx-auto h-full px-3'>
               <div className='h-full pt-72 lg:pt-60'>
                  <h2 className='text-white font-bold tracking-wider text-4xl mb-5'>Categories</h2>
                  <p className='text-white lg:w-[60%] text-xs'>Some catchy and cool slogans can easily attract the consumer to buy the product and make that tagline more memorable in the mind of the consumer.</p>
               </div>
            </div>
         </div>
         <div>
         
         </div>   
      </div>
   )
}

export default MyBags
