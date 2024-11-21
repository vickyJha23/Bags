import React from 'react'
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";





const Header = () => {
  return (
    <main className='min-h-screen bg-[#111]'>
      <div className='w-full h-16 py-4 px-3 grid place-items-center lg:px-0 bg-primaryColor lg:bg-secondaryColor border-b lg:border-none'>
        <nav className='w-full h-full  flex justify-between items-center lg:max-w-[1170px] lg:mx-auto'>
          <div className='mr-10'>
            <h1>
              <span className='text-3xl font-semibold tracking-wide text-white'>Bags</span>
            </h1>
          </div>
          <ul className='text-white hidden lg:flex-1 lg:flex lg:items-center lg:space-x-6'>
            <li className='group'>
              <button className='flex place-items-center justify-center space-x-2 group'>
                <span></span>
                <span>All Products</span>
                <span className='transition-all duration-200 ease-linear group-hover:-rotate-180'>
                  <FaAngleDown />
                </span>
              </button>
              <div className='w-full shadow-sm h-0 bg-secondaryColor absolute top-[73px] border-t-0 left-0 transition-all duration-200 ease-linear group-hover:h-48
               group-hover:border-t'>

              </div>
            </li>
            <li className='relative group'>
                 <button className='flex group items-center justify-center space-x-2'>
                    <span>Pages</span>
                    <span className='transition-all  duration-200 ease-linear group-hover:-rotate-180'>
                       <FaAngleDown />
                    </span>
                 </button>
                 <div className='absolute  px-4  top-[45px] shadow-md bg-secondaryColor min-w-48 h-0 border-t-0 transition-all duration-200 ease-linear group-hover:h-28 group-hover:!border-t overflow-hidden'>
                      <div className='py-4 text-xs flex flex-col space-y-4'>
                      <Link to="" className='transition-all duration-200 ease-linear hover:underline'>
                         About us
                       </Link>
                      <Link to="" className='transition-all duration-200 ease-linear hover:underline'>
                          Contact with us
                      </Link>
                      <Link to="" className='transition-all duration-200 ease-linear hover:underline'>
                           Terms & Conditions
                      </Link>
                      </div>
                 </div>
            </li>
            <li className='grid place-items-center'>
                <Link to ="">
                     All Collections
                 </Link>
            </li>
          </ul>
          <div className='flex items-center space-x-4'>
            <button className='text-white grid place-items-center'>
              <CiSearch size={26} className='lg:hidden' />
              <span className='hidden lg:inline-block'>
                Search Products
              </span>
            </button>
            <div className='relative'>
              <span className='text-white'>
                <CiShoppingCart size={26} />
              </span>
              <span className='absolute w-5 h-5 bg-black rounded-full text-white text-center -top-2 -right-2 grid place-items-center lg:bg-primaryColor'>
                <span className='inline-block text-xs font-bold'>0</span>
              </span>
            </div>
            <button className='text-white grid place-items-center lg:hidden'>
              <RxHamburgerMenu size={26} />
            </button>
          </div>
        </nav>
      </div>
    </main>
  )
}

export default Header
