import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../../../public/cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increment: (state,action) => {
   
    },
  },
});
export default cartSlice.reducer;
export const { clearCart, remove ,increment} = cartSlice.actions;
