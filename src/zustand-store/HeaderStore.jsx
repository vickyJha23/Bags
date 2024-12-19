  import { create } from "zustand";

  const useHeaderStore = create((set) => (
        {
            // initial state
          isSearchBarVisible: false,
          isInputCloseBtnVisible: false,
          searchQuery: "",
          isCartVisible: false,
          isHamburgerMenuVisible: false,
          isAccordionVisible: false, 
  
          
      
      // action
          showSearchBar: () => {
              set({isSearchBarVisible: true})
          },
          hideSearchBar: () => {
            set({
                isSearchBarVisible: false
            })
          },
          showInputCloseBtn: () => {
              set({
                  isInputCloseBtnVisible: true
              })
          },
          hideInputCloseBtn: () => {
              set({
                  isInputCloseBtnVisible: false
              })
          },
          setSearchQuery: (query) => {
              set({
                  searchQuery: query
              })
          },
          showCart: () => {
              set({
                isCartVisible: true
              })
          },
          hideCart: () => {
            set({
                isCartVisible: false
            })
          },
          showHamburgerMenu: () => {
              set({
                isHamburgerMenuVisible: true
              })
          },
          hideHamburgerMenu: () => {
              set({
                isHamburgerMenuVisible: false
              })
          },
      toggleAccordion: () => {
          set((state) => ({isAccordionVisible: !state.isAccordionVisible}))
      } 
    }
  ))

  export default useHeaderStore;