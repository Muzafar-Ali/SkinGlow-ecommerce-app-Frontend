import { CartProductType } from "@/utils/types";
import { create } from "zustand";

export type CartType = {
  cartItems: CartProductType[];
  addToCart: (newItem: CartProductType) => void;
  removeItem: (id: string) => void;
  updateCartItems: (newItem: CartProductType, quantitySelected: number) => void;
};

export type FilterSelection = {
  filterSelections: string[];
  addFilterSelection: (filter: string) => void;
};


export const useCartItems = create<CartType>((set) => ({
  
  cartItems: [],

  addToCart: (newItem: CartProductType) => {
    set((state) => {
      const item = state.cartItems.find((product) => product._id === newItem._id);
      
      if (item && item.quantity !== undefined) {
        // max limit to buy - one customer can buy 10 items
        if(item.quantity >=10){
          return { cartItems: [...state.cartItems] };
        }

        item.quantity += 1;
        item.price = item.itemPrice * item.quantity;
      } else {
        return { cartItems: [...state.cartItems, { ...newItem, quantity: 1 }] };
      }

      // Make sure to return the updated state
      return { ...state, cartItems: [...state.cartItems] };
      // return { ...state };
    });
  },

  removeItem: (id: string) => {
    set((state) => {
      // Create a new state object with the updated cartItems array
      const updatedCartItems = state.cartItems.filter((product) => product._id !== id);
      return { ...state, cartItems: updatedCartItems };
    });
  },

  updateCartItems: (newItem: CartProductType, quantitySelected: number) => {
    set((state) => {
      const updatedCartItems = state.cartItems.map((product) =>{
        if(product._id === newItem._id && newItem.itemPrice !== undefined){
          product.price = newItem.itemPrice * quantitySelected;
          product.quantity = quantitySelected;
        }
        return{ ...product}
      })

      return { ...state, cartItems: updatedCartItems };
    });
  },

}));

export const useFilterSelection = create<FilterSelection>((set) => ({
  filterSelections: [],
  addFilterSelection: (filter: string) => {
    set((state) => {
      return { filterSelections: [...state.filterSelections, filter] };
    });
  },

  // removeFilterSelection: (filter: string) => {
  //   set((state) => {
  //     const updatedFilterSelections = state.filterSelections.filter((item) => item !== filter);
  //     return { filterSelections: updatedFilterSelections };
  //   })
  // },


}));

type CategpriesType = {
  cheek: string[];
  eye: string[];
  lip: string[];
  skincare: string[];
  skinCondition: string[];
  addCheek: (cheek: string[]) => void;
  addEye: (eye: string[]) => void;
  addLip: (lip: string[]) => void;
  addSkincare: (skincare: string[]) => void;
  addSkinCondition: (skinCondition: string[]) => void;
}
export const useMenuCategories = create<CategpriesType>((set) => ({
  cheek: [],
  eye: [],
  lip: [],
  skincare: [],
  skinCondition: [],

  addCheek: (cheek: string[]) => {
    set((state) => {
      return { ...state, cheek: [...state.cheek, ...cheek] }; // Correctly spread both arrays
    });
  },
  

  addEye: (eye: string[]) => {
    set((state) => {
      return { ...state, eye: [...state.eye, ...eye] }; // Correctly spread both arrays
    });
  },

  addLip: (lip: string[]) => {
    set((state) => {
      return { ...state, lip: [...state.lip, ...lip] };
    });
  },

  addSkincare: (skincare: string[]) => {
    set((state) => {
      return {...state, skincare: [...state.skincare, ...skincare] };
    });
  },

  addSkinCondition: (skinCondition: string[]) => {
    set((state) => {
      return {...state, skinCondition: [...state.skinCondition, ...skinCondition] };
    });
  },
})); 



// watch this video for more details  https://www.youtube.com/watch?v=oLPgc5Fp2Ts