import { create } from "zustand";

const useCardStore = create((set) => ({
     cards:[],
     initializeCard: (cardID, product, color) => {
         set((state) => {
            const existingCard = state.cards.find((card) => card.id === cardID);
            if(existingCard){
                 return {}
            }   
            else {
                 return {
                     cards: [
                         ...state.cards, 
                         {
                             id: cardID,
                             image: product.variants[0].images[0],
                             variant: color,
                             activeIndex: 0
                         }
                     ]
                 }
            }

           
         })
     },
     setActiveIndex: (cardID, index) => {
        set((state) => {
             const updatedCards = state.cards.map((card) => {
                   if(card.id !== cardID){
                       return card;
                   }
                   return {
                       ...card, 
                       activeIndex: index
                   }
             });
             return {cards: updatedCards}
        })
     },
     updateProductVariant: (cardID, product, color) => {
         set((state) => {
             const updatedCards = state.cards.map((card) => {
                  if(card.id !== cardID){
                      return card;
                  }
                  const updatedImageSrc = product.variants.find((variant) => variant.color.toLowerCase() === color.toLowerCase()).images[0];
                  return {
                       ...card, 
                        image: updatedImageSrc,
                        variant: color
                  }
             });
             return {
                 cards: updatedCards
             }
         })
     }     
}));

export default useCardStore;