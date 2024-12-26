import { create} from "zustand";

const useModalStore = create((set) => ({
     modals: [],
     initializeModal: (modalID) => {
        console.log(modalID);
         set((state) => {
             const existingModal = state.modals.find((modal) => modal.id === modalID);
             if(existingModal){
                  return {}
             }
            return {
                modals: [...state.modals, {
                    id: modalID,
                    visible: false,
                    selectedProduct: {},
                    modalSelectedColor: '',
                }]
            }
         })
     },
     makeModalVisible: (modalID, product) => {
       console.log(modalID, product);
        set((state) => {
            const updatedModals = state.modals.map((modal) => {
                 if(modal.id !== modalID){
                      return modal;
                 }
                 return {...modal, visible: true, selectedProduct: product.variants[0], modalSelectedColor: product.variants[0].color}
            });

            return { modals: updatedModals }
        })
     },
     makeModalHide: (modalID) => {
        set((state) => {
             const updatedModals = state.modals.map((modal) => {
                 if(modal.id !== modalID){
                      return modal
                 }
                 return {
                     ...modal, 
                     visible: false
                 }
             })
             return {modals: updatedModals}
        })
     },
     updateModalSelectedProductAndColor: (modalID, product, color) => {
         set((state) => {
             const updatedModals = state.modals.map((modal) => {
                 if(modal.id !== modalID){
                      return modal;
                 }
                 const updatedSelectedProduct = product.variants.find((variant) => variant.color.toLowerCase() === color.toLowerCase());
                return {...modal, modalSelectedColor: color, selectedProduct: updatedSelectedProduct}
             })
             return {modals: updatedModals}
         })
     }   
}));

export default useModalStore;