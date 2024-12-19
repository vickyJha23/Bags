import React from 'react'


// static data import
import images from '../assets/images/image'






// component imports
import MyBags from "../components/MyBags"
import FeaturedProducts from '../components/FeaturedProducts';
import Button from '../components/Button'; 



const Home = () => {
  return (
    <main className='w-full h-auto'>
     <section className=''>
        <div className='bg-secondaryColor py-10'>
          <div className='grid  md:grid-cols-2 gap-6'>
              <div className='hidden md:block md:py-6 md:px-6 lg:px-0 lg:-mt-24 shadow-sm'>
                  <img src={images.cmsBanner} alt="" className='w-full max-h-[470px] rounded-tr-[10px] rounded-br-[10px] object-cover'/>
              </div> 
              <div className='px-3 md:px-0 py-6 space-y-6 text-white'>
                  <h4>Bags</h4>
                  <h2 className='font-bold text-3xl md:text-3xl lg:text-4xl'>Fair prices with 
                    <br /> valuable design</h2>
                  <p className='text-xs lg:w-[60%]'>Catchy bag company taglines create a difference among opponents in the eye of the audience and help to engage customers towards the brand.</p>
                  <Button content='Show Product' />
           </div>
          </div>
        </div> 
         <div className='relative pb-10'>
              <FeaturedProducts />
         </div>
        </section>
        <section className='relative w-full h-auto'>
            <MyBags />
        </section> 
    </main>
  )
}

export default Home
