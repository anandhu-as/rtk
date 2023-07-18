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
    increment: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id == action.payload
      );
      cartItem.amount += 1;
    },
    decrement: (state, action) => {
        const cartItem = state.cartItems.find(
          (item) => item.id == action.payload
        );
        cartItem.amount -= 1;
      },
  },
});
export default cartSlice.reducer;
export const { clearCart, remove, increment,decrement } = cartSlice.actions;
