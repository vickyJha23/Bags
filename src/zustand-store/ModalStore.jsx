import { create } from "zustand";


// this create method creates store hook which will provide the state and actions 
// const useModalStore = create((set) => {
//    return {
//        isModalVisible: false,
//        productColor: "",
//        selectedProduct: {},
//        makeModalVisible: () => {
//            set({isModalVisible: true}) 
//        },
//        makeModalHide: () => {
//           set({isModalVisible: false}) 
//        },
//        setProductColor: (color) => {
//             set({productColor: color})
//        },
//        initializeProductColor: (product) => set(() => {
//            console.log(product);
//           if(product?.variants?.length > 0){
//             const defaultColor = product.variants[0]?.color;
//             console.log(defaultColor);
//             return { productColor: defaultColor }
//           } 
//           return  { productColor: "black"}
//        })
//        ,
//        setSelectedProduct: (product) => set((state) => {
//            const prod = product?.variants?.find((variant) => variant.color.toLowerCase() === state.productColor?.toLowerCase());
//            return {selectedProduct: prod || {}};
//        })
//     }
// })

// const useModalStore = create((set) => ({
//      modals: {},
//      openModal: (cardID) => set((state) => {
//         return {...state.modals, [cardID]: {
//             isModalVisible: true,
//             productColor: "",
//             selectedProduct: {}
//         }} 
//      }),
//      closeModal: (cardID) => set((state) => {
//          return {...state.modals, [cardID]: {
//                ...state.modals[cardID],
//                isModalVisible: false, 
//          }}
//      }),
//      setProductColor: (cardID, color) => set((state) => {
//          return {
//               modals: {...state.modals, [cardID]: {
//                   ...state.modals[cardID],
//                   productColor: color
//               }}
//          }
//      }),
//      initializeProductColor: (cardID, product) => set((state) => {
//            if(product?.variant?.length > 0){
//                 const defaultColor = product.variants[0]?.color;
//                   return {
//                       modals: {
//                           ...state.modals, 
//                           [cardID]: {
//                                ...state.modals[cardID], 
//                                productColor: defaultColor
//                           }
//                       }
//                   }
//                }
//                else {
//                    return {
//                        modals: {
//                         ...state.modals, 
//                         [cardID]: {
//                             ...state.modals[cardID],
//                             productColor: "black"
//                         }
//                        }
//                    }
//                }
//      })   
// }))


// this method use to create the modal hook store ...
const useModalStore = create((set) => ({
      modals: {
      }, // this is the initial state of the modal store
      activeIndex: 0,
      openModal: (cardID) => {
           set((state) => {
                return {
                     modals: {
                        ...state.modals,
                        [cardID]: {
                             ...state.modals[cardID],
                             isModalVisible: true,
                        }
                     }
                }
           })
      },
      closeModal: (cardID) => {
          set((state) => {
            return  {
                 modals: {
                      ...state.modals, [cardID]: {
                         ...state.modals[cardID],
                          isModalVisible: false,
                      }
                 }
              }
      })
      },
      initializeModal: (cardID, color, product) => {
          if(!cardID || !color || !product) {
                return;
          }
          set((state) => {
              const defaultVariant = product.variants.find((variant) => variant.color.toLowerCase() === color.toLowerCase()) || product.variants[0] || null; 
              return {
                    modals:{
                         ...state.modals,
                         [cardID]: {
                             ...state.modals[cardID],
                             selectedProduct: defaultVariant
                         }
                    }
              } 
          })
      },      
     setProductColor: (cardID, color) => {
          console.log(cardID, color)
          if(!cardID || !color){
                return;    
          }            
          set((state) => {
               console.log("Jay shree ram");
               return {
                   modals:{ ...state.modals,
                    [cardID]: {
                         ...state.modals[cardID],
                         productColor: color
                    }
               }
          }
          })
     },
      setSelectedProduct: (cardID, color, product,) => {
          set((state) => {
              const productvariant = product.variants.find((variant) => variant.color.toLowerCase() === color.toLowerCase())
              return {
                 modals: {
                    ...state.modals,
                    [cardID]: {
                         ...state.modals[cardID],
                         selectedProduct: productvariant
                    }
                 }
              }
          })
      },
      handleActiveIndex : (index) => {
          set(() => {
              return {activeIndex: index} 
          }) 
      } 
}))

export default useModalStore;

