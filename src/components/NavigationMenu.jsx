import React from 'react';
import { Link } from "react-router-dom";
import { FaAngleDown} from "react-icons/fa6";


// static data import 
import images from '../assets/images/image';

const NavigationMenu = () => (
    <ul className='text-white hidden lg:flex-1 lg:flex lg:items-center lg:space-x-6'>
            <li className='group'>
              <button className='flex place-items-center justify-center space-x-2 group'>
                <span></span>
                <span>All Products</span>
                <span className='transition-all duration-200 ease-linear group-hover:-rotate-180'>
                  <FaAngleDown />
                </span>
              </button>
            <div className='w-full overflow-hidden shadow-sm h-0 bg-secondaryColor absolute top-[60px] z-10 border-t-0 left-0 transition-all duration-200 ease-linear group-hover:h-80
               group-hover:border-t'>
                   <div className='hidden lg:block w-full py-4 pt-8 max-w-[1170px] mx-auto h-full'>
                        <div className='grid grid-cols-3'>
                             <div className='w-full h-full'>
                                 <h2 className='font-bold tracking-wide mb-4'>Backpack</h2>
                                 <ul className='text-xs space-y-4'>
                                     <li className='transition-all duration-200 ease-linear hover:underline'>
                                         <Link to="">
                                              William Backpack
                                         </Link>
                                     </li> 
                                     <li className='transition-all duration-200 ease-linear hover:underline'>
                                         <Link to="">
                                             Warren Backpack
                                          </Link>
                                     </li> 
                                     <li className='transition-all duration-200 ease-linear hover:underline'>
                                         <Link to="">
                                             Search Backpack
                                         </Link>
                                     </li> 
                                     <li className='transition-all duration-200 ease-linear hover:underline'>
                                         <Link to="">
                                             Celina Backpack
                                         </Link>
                                     </li> 
                                     <li className='transition-all duration-200 ease-linear hover:underline'>
                                         <Link to="">
                                              Bradner Backpack
                                          </Link>
                                     </li> 
                                     <li className='transition-all duration-200 ease-linear hover:underline'>
                                         <Link to="">
                                             Atlanta Backpack
                                         </Link>
                                     </li> 
                                 </ul> 
                             </div> 
                             <div className='w-full h-full'>
                                 <h2 className='font-bold mb-4'>Bags</h2> 
                                 <ul className='text-xs space-y-4'>
                                    <li className='transition-all duration-200 ease-linear hover:underline'>
                                      <Link to="">
                                           Collins Leather Belt
                                      </Link>
                                    </li>  
                                    <li className='transition-all duration-200 ease-linear hover:underline'>
                                      <Link to="">
                                           Garth Slim Backpack
                                      </Link>
                                    </li>  
                                    <li className='transition-all duration-200 ease-linear hover:underline'>
                                      <Link to="">
                                           Garth Commuter Duffle
                                      </Link>
                                    </li>  
                                    <li className='transition-all duration-200 ease-linear hover:underline'>
                                      <Link to="">
                                           Barth Safari Duffle Bag
                                      </Link>
                                    </li>  
                                    <li className='transition-all duration-200 ease-linear hover:underline'>
                                      <Link to="">
                                           Bryant  Lte city Pack
                                      </Link>
                                    </li>  
                                    <li className='transition-all duration-200 ease-linear hover:underline'>
                                      <Link to="">
                                           Bryant Analyst Bag
                                      </Link>
                                    </li>  
                                </ul> 
                             </div> 
                             <div className='w-full h-full'>
                                  <Link to="" className=''>
                                      <img src={images.menuBnr} className='w-full h-64 object-contain transition-all duration-200 ease-linear hover:border-b' alt="()" />
                                  </Link>
                             </div> 
                        </div>  
                   </div>
              </div>
            </li>
            <li className='relative group'>
                 <button className='flex group items-center justify-center space-x-2'>
                    <span>Pages</span>
                    <span className='transition-all  duration-200 ease-linear group-hover:-rotate-180'>
                       <FaAngleDown />
                    </span>
                 </button>
                 <div className='absolute z-10 px-4  top-[42px] shadow-md bg-secondaryColor min-w-48 h-0 border-t-0 transition-all duration-200 ease-linear group-hover:h-28 group-hover:!border-t overflow-hidden'>
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
)

export default NavigationMenu
