import React from 'react';
import { Link } from "react-router-dom";

// library import 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


// component import
import Button from './Button';
import Feed from './Feed';
import SmallCard from './SmallCard';
import FashionTestimonial from './FashionTestimonial';


// static data import
import { Bags } from '../assets/data'

const MyBags = () => {
  return (
    <section className="realtive w-full h-auto">
      <div className="w-full max-w-[1180px] mx-auto !h-full px-3">
        <div className="text-center">
          <h5 className="text-black text-center font-bold">Bags</h5>
          <h2 className="font-bold text-3xl mt-3 mb-5">
            A purse which shows
            <br /> genteman's gesture
          </h2>
          <p className="lg:w-1/2 text-sm mx-auto text-tertiaryColor mb-5">
            Slogans are usually used to emphasize the identity of a brand and
            make it more reputable in terms of buisness. Short and eye-catching
            bag advertisements slogans will be beneficial for advertising the
            brand.
          </p>
          <Button content="show Product" />
        </div>
        <Feed products={Bags} isPaginationRequired={true} />
      </div>
      {/* Categories section */}
      <div
        style={{
          background: `url("https://bags-workdo.myshopify.com/cdn/shop/files/cat-bnr.png?v=1682418988")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",

        }}
        className="w-full !h-[60vh] -mt-[220px]"
      >
        <div className="w-full max-w-[1180px] mx-auto h-full px-3">
          <div className="h-full pt-72 lg:pt-60">
            <h2 className="text-white font-bold tracking-wider text-4xl mb-5">
              Categories
            </h2>
            <p className="text-white lg:w-[60%] text-sm">
              Some catchy and cool slogans can easily attract the consumer to
              buy the product and make that tagline more memorable in the mind
              of the consumer.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondaryColor w-full h-auto">
        <div className="w-full max-w-[1180px] mx-auto px-3 pb-5">
          {/* banner containers  */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-[300px] lg:w-[350px] h-[300px] px-[20px] py-[30px] rounded-[25px] overflow-hidden relative flex justify-center items-center">
              <div className="w-full h-full">
                <img
                  src="https://bags-workdo.myshopify.com/cdn/shop/files/1.png?v=1682419888"
                  alt="()"
                  className="w-full h-full object-cover absolute top-0 left-0 -z-2"
                />
                <div className="relative">
                  <div className="text-white mb-20 space-y-2">
                    <h4 className="text-sm tracking-wide">Categories</h4>
                    <h2 className="text-3xl font-bold tracking-wide">
                      Wallet
                    </h2>
                  </div>
                  <div className="text-white mt-36">
                    <Link
                      to=""
                      className="bg-primaryColor space-x-1 px-3 py-2 rounded-[20px] flex justify-center items-center w-[100px]"
                    >
                      <span>6</span>
                      <span>-</span>
                      <span>Items</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[300px] lg:w-[350px] h-[300px] px-[20px] py-[30px] rounded-[25px] overflow-hidden relative flex justify-center items-center">
              <div className="w-full h-full">
                <img
                  src="https://bags-workdo.myshopify.com/cdn/shop/files/1.png?v=1682419888"
                  alt="()"
                  className="w-full h-full object-cover absolute top-0 left-0 -z-2"
                />
                <div className="relative">
                  <div className="text-white mb-20 space-y-2">
                    <h4 className="text-sm tracking-wide">Categories</h4>
                    <h2 className="text-3xl font-bold tracking-wide">Bags</h2>
                  </div>
                  <div className="text-white mt-36">
                    <Link
                      to=""
                      className="bg-primaryColor space-x-1 px-3 py-2 rounded-[20px] flex justify-center items-center w-[100px]"
                    >
                      <span>6</span>
                      <span>-</span>
                      <span>Items</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[300px] lg:w-[350px] h-[300px] px-[20px] py-[30px] rounded-[25px] overflow-hidden relative flex justify-center items-center">
              <div className="w-full h-full">
                <img
                  src="https://bags-workdo.myshopify.com/cdn/shop/files/1.png?v=1682419888"
                  alt="()"
                  className="w-full h-full object-cover absolute top-0 left-0 -z-2"
                />
                <div className="relative">
                  <div className="text-white mb-20 space-y-2">
                    <h4 className="text-sm tracking-wide">Categories</h4>
                    <h2 className="text-3xl font-bold tracking-wide">
                      Backpacks
                    </h2>
                  </div>
                  <div className="text-white mt-36">
                    <Link
                      to=""
                      className="bg-primaryColor space-x-1 px-3 py-2 rounded-[20px] flex justify-center items-center w-[100px]"
                    >
                      <span>6</span>
                      <span>-</span>
                      <span>Items</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of banners container  */}

          <div className="w-full h-auto py-8 grid lg:grid-cols-2 gap-4">
            {/* Left Section */}
            <div className="flex items-center w-full h-full">
              <div className="text-white space-y-4">
                <h5 className="font-bold">Bags</h5>
                <h2 className="text-4xl font-bold">
                  Classic Style for <br /> Modern brights
                </h2>
                <p className="text-sm w-[80%] !mt-5">
                  It emphasizes the brand identity and makes it more reputable in terms of business. Effective paper bag slogans should be catchy, short, and easy to remember so that consumers can easily learn the brand name.
                </p>
                <Button content='show product' />
              </div>
            </div>

            {/* Right Section */}
            <Swiper id='SmallCardSwiper' modules={[Pagination]} pagination={{
                clickable: true,
                renderBullet: function(_, className){
                   return `
                       <span class="${className}">
          <span class="inline-block w-[5px] h-[5px] !bg-white absolute z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
   </span>
                   `
                }
            }} cssMode={true} speed={200} slidesPerView={2} spaceBetween={10} breakpoints={{
                  0: {
                     slidesPerView: 1
                  },
                  640: {
                       slidesPerView: 2
                  }

            }} className='w-full h-full'>
                <div className="w-full h-full p-2 flex gap-2 items-center">
                    {Bags.map((bag,index) => {
               return <SwiperSlide key={index} className='pb-10'> 
                            <SmallCard product={bag} />
                        </SwiperSlide>
})}
                 </div>
            </Swiper>
          </div>

        </div>
        {/* {Fashion Testimonial}  */}
        <FashionTestimonial />  
      </div>
    </section>
  );
}

export default MyBags
