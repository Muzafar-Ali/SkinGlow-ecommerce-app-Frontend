import { ProductsType2 } from "@/lib/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    cartItems: ProductsType2[];
  }
  
  const initialState: CartState = {
    cartItems: [],
  };
  

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addtoCart : (state, action) => {
            const item = state.cartItems.find((product) => product.id === action.payload.id) as ProductsType2
            if(item){
                if(item.quantity !== undefined){
                    item.quantity += 1;
                    item.attributes.price = item.attributes.price * item.quantity;
                }
            }else{
                state.cartItems.push({...action.payload, quantity: 1})
            }
        },
        removeItem : (state, action) => {
            state.cartItems = state.cartItems.filter((product) => product.id !== action.payload.id)
        }
    }
})

export const { addtoCart, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

// removeFromCart : (state, action) => {
//     const item = state.cartItems.find((product) => product.id === action.payload.id) as ProductsType2
//     if(item){
//         item.quantity -= 1;
//         item.attributes.price = item.attributes.price * item.quantity;
//     }
//     if(item.quantity === 0){
//         state.cartItems = state.cartItems.filter((product) => product.id !== action.payload.id)
//     }
// },

// clearCart : (state) => {
//     state.cartItems = []
// },