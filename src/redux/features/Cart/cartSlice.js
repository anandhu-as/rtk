import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../../../public/cartItems";
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};
export const getCartItems = createAsyncThunk("cart/getcartItems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => rconsole.log(err));
});
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
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false
    
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]:(state)=>{
        state.isLoading=false
    }
  },
});
export default cartSlice.reducer;
export const {
  clearCart,
  remove,
  increment,
  decrement,
  calculateTotal,
} = cartSlice.actions;
