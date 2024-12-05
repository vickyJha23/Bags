import React from 'react'


// static data import
import images from '../assets/images/image'
import  {Bags}  from '../assets/data'




// component imports
import Button from '../components/Button'
import Feed from '../components/Feed'
import MyBags from "../components/MyBags"

const Home = () => {
  return (
    <main className='w-full relative'>
       <div className='w-full h-[1150px] bg-secondaryColor mt-48'>
          <div className='grid  md:grid-cols-2 gap-6'>
              <div className='hidden md:block md:py-6 md:px-6 lg:px-0 lg:-mt-16 shadow-sm'>
                  <img src={images.cmsBanner} alt="" className='w-full md:aspect-square lg:aspect-[7/4]  rounded-tr-[10px] rounded-br-[10px] md:object-cover lg:!object-center'/>
              </div> 
              <div className='px-6 md:px-0 py-6 space-y-6 text-white'>
                  <h4>Bags</h4>
                  <h2 className='font-bold text-3xl md:text-3xl lg:text-4xl'>Fair prices with 
                    <br /> valuable design</h2>
                  <p className='text-xs w-[60%]'>Catchy bag company taglines create a difference among opponents in the eye of the audience and help to engage customers towards the brand.</p>
                  <Button content='Show Product' />
              </div>
          </div> 
          <div className='px-6 md:px-0 mt-16 w-full max-w-[1180px] overflow-hidden mx-auto h-auto'>
             <div className='space-y-4'>
                  <h1 className='font-bold text-white text-4xl'>Designs that fits in everything</h1>
                  <p className='text-xs text-white'>It could reflect a buisness's goals and personalities through the strong tagline,<br/> and customers usually remember the catchy taglines and attract them.</p>
             </div>
             <Feed products={Bags} />
          </div> 

       </div>
       <MyBags />  
    </main>
  )
}

export default Home
