import React from 'react';
import { Link } from "react-router-dom";
import { FaAngleDown} from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import useHeaderStore from '../zustand-store/HeaderStore';


const HambergerMenu = () => {
  const isAccordionVisible =  useHeaderStore((state) => state.isAccordionVisible);
const hideHamburgerMenu = useHeaderStore((state) => state.hideHamburgerMenu); 
const isHamburgerMenuVisible =useHeaderStore((state) => state.isHamburgerMenuVisible);     
const toggleAccordion = useHeaderStore((state) => state.toggleAccordion)

if(!isHamburgerMenuVisible){
     return null;
}

   return ( <div onClick={(e) => {
        if(!e.target.closest("button") && !e.target.closest("#hamburgetContainer")){
             hideHamburgerMenu();
        }   
 }} className='w-full min-h-screen lg:hidden bg-[rgba(0,0,0,0.7)] fixed z-40 top-0 left-0'>
          <div id="hamburgetContainer" className='absolute right-0 bg-white h-full w-5/6'>
              <div className='grid h-full grid-rows-[auto,1fr]'>
                    <div className='bg-secondaryColor h-12 flex items-center px-3'>
                          <button onClick={hideHamburgerMenu} className='text-white'>       
                                <LiaTimesSolid size={28} />    
                          </button>    
                    </div>  
                    <div className='w-full h-full bg-white px-4 py-4'>
                        <ul className='font-bold space-y-4'>
                               <li className=''>
                                    <button onClick={() => toggleAccordion()} className='flex justify-between items-center w-full'>
                                           <span className='font-semibold  text-lg'>
                                                Shop All   
                                           </span>   
                                           <span className='font-light'>
                                               {isAccordionVisible ? <LiaTimesSolid size={26} />: <FaAngleDown size={26} />}
                                           </span>
                                    </button> 
                                    <div className={`transition-all duration-200 ease-linear h-0 overflow-hidden ${isAccordionVisible ? "h-16": ""}`}>
                                         <ul className='space-y-3 overflow-hidden text-sm font-semibold mt-2'>
                                             <li className=''>
                                                 <Link to="">
                                                     Backpacks
                                                 </Link>
                                             </li>
                                             <li>
                                                 <Link to="">
                                                     Bags
                                                 </Link>
                                             </li>
                                         </ul>
                                    </div>
                               </li>
                               <li>
                                    <Link to="">
                                        All Collection
                                    </Link>
                               </li>
                               <li>
                                    <Link to="">
                                        About Us
                                    </Link>
                               </li>
                               <li>
                                    <Link to="">
                                        Contact Us 
                                    </Link>
                               </li>
                        </ul>  
                    </div>
              </div>  
         </div>      
 </div>
   )
}


export default HambergerMenu
