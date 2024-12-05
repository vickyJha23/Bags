import React from 'react'
import Button from './Button'
import Feed from './Feed'

import { Bags } from '../assets/data'

const MyBags = () => {
  return (
    <div className='w-full h-[50vh] mt-60'>
         <div className='w-full max-w-[1180px] h-full mx-auto'>
               <div className='text-center'>
                  <h5 className='text-black text-center font-bold'>Bags</h5>
                  <h2 className='font-bold text-3xl mt-3 mb-5'>
                      A purse which shows<br />  genteman's gesture  
                   </h2> 
                  <p className='w-1/2 text-sm mx-auto text-tertiaryColor mb-5'>
                    Slogans are usually used to emphasize the identity of a brand and make it more reputable in terms of
                    buisness. Short and eye-catching bag advertisements slogans will be beneficial for advertising the brand.
                  </p>
                  <Button content='show Product' />
               </div>
                  <Feed products={Bags} isPaginationRequired={true} />
                  
         </div>
                  <div style={{
                     background: `url("https://bags-workdo.myshopify.com/cdn/shop/files/cat-bnr.png?v=1682418988")`
                  }} className='w-full h-full bg-center bg-no-repeat bg-cover mt-52'>

                  </div>
    </div>
  )
}

export default MyBags
