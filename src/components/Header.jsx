import React, { useState } from 'react'
import { CiSearch, CiShoppingCart } from "react-icons/ci";

import { RxHamburgerMenu } from "react-icons/rx";


// static data import 
import images from '../assets/images/image';

// components import
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import HambergerMenu from './HamburgerMenu';
import SearchBar from './SearchBar';
import Cart from './Cart';
import Hero from './Hero';


import useHeaderStore from '../zustand-store/HeaderStore';

const Header = () => {
  const showCart = useHeaderStore((state) => state.showCart);
  const showHamburgerMenu = useHeaderStore((state) => state.showHamburgerMenu);
  const showSearchBar = useHeaderStore((state) => state.showSearchBar);
  // console.log("Header");


  return (
    <header className='h-screen md:h-auto mb-[160px]'>
      <div>
        <div className='w-full h-16 py-4 px-3 grid place-items-center lg:px-0 bg-primaryColor lg:bg-secondaryColor border-b lg:border-none'>
          <nav className='w-full h-full  flex justify-between items-center lg:max-w-[1170px] lg:mx-auto'>
            <Logo />
            <NavigationMenu />
            <div className='flex items-center space-x-4'>
              <button onClick={showSearchBar} className='text-white grid place-items-center'>
                <CiSearch size={26} className='lg:hidden' />
                <span className='hidden lg:inline-block'>
                  Search Products
                </span>
              </button>
              <button onClick={showCart} className='relative'>
                <span className='text-white'>
                  <CiShoppingCart size={26} />
                </span>
                <span className='absolute w-5 h-5 bg-black rounded-full text-white text-center -top-2 -right-2 grid place-items-center lg:bg-primaryColor'>
                  <span className='inline-block text-xs font-bold'>0</span>
                </span>
              </button>
              <button onClick={showHamburgerMenu} className='text-white grid place-items-center lg:hidden'>
                <RxHamburgerMenu size={26} />
              </button>
            </div>
          </nav>
        </div>
        <SearchBar />
        <Cart />
        <HambergerMenu />
      </div>
      <Hero />
    </header>
  )
}

export default Header
