import React from 'react';
import { CiSearch} from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import useHeaderStore from '../zustand-store/HeaderStore';


const SearchBar = () => {
const searchQuery = useHeaderStore((state) => state.searchQuery)
const setSearchQuery      = useHeaderStore((state) => state.setSearchQuery)
const showInputCloseBtn   = useHeaderStore((state) => state.showInputCloseBtn)
const hideInputCloseBtn   = useHeaderStore((state) => state.hideInputCloseBtn)
const isInputCloseBtnVisible =  useHeaderStore((state) => state.isInputCloseBtnVisible)
const hideSearchBar   = useHeaderStore((state) => state.hideSearchBar)
const isSearchBarVisible =    useHeaderStore((state) => state.isSearchBarVisible)


if(!isSearchBarVisible){
      return null;
}


return (
     <div className="w-full min-h-screen px-6 lg:px-0 fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] grid place-items-center">
       {/* Main Search Bar Container */}
       <div className="w-full max-w-[1170px] h-12 border">
         <form className="flex h-full">
           {/* Input Field */}
           <div className="relative flex-1 h-full">
             <input
               onChange={(e) => setSearchQuery(e.target.value)}
               value={searchQuery}
               onFocus={showInputCloseBtn}
               type="text"
               placeholder="Search Product..."
               className="w-full h-full bg-transparent text-white focus:outline-none px-6 placeholder:text-white placeholder:text-xs"
             />
             {/* Clear Input Button */}
             {isSearchBarVisible && (
               <button
                 onClick={() => {
                   setSearchQuery("");
                   hideInputCloseBtn();
                 }}
                 className="absolute top-1/2 right-4 text-blue-700 font-bold -translate-y-1/2"
                 type="button"
               >
                 <LiaTimesSolid />
               </button>
             )}
           </div>
           {/* Search Button */}
           <button className="text-white bg-primaryColor px-3" type="submit">
             <CiSearch size={28} />
           </button>
         </form>
       </div>
 
       {/* Close Search Bar Button */}
       <button
         onClick={hideSearchBar}
         className="absolute text-white top-1 right-1 lg:top-16 lg:right-16"
       >
         <LiaTimesSolid size={40} />
       </button>
     </div>
   );
}


export default SearchBar
