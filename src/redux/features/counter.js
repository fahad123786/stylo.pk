import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  cartItems: 0, // Add a cartItems property to track items in the cart
};

export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addToCart: (state) => {
      state.cartItems += 1; // Action to increment cart items
    }
  }
});

export const { increment, decrement, addToCart } = counter.actions;

export default counter.reducer;
