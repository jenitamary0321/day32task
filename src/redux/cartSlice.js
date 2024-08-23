import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // This will hold the cart items
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.items = action.payload;
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + item.quantity * item.price, 0);
    },
    increaseQuantity(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
        state.totalAmount += item.price;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalAmount -= item.price;
      }
    },
  },
});

export const { setCartItems, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
