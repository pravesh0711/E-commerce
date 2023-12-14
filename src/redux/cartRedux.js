import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct:(state,action)=>{
      const removeItem = state.products.filter((item) => item._id !== action.payload._id);
      state.products = removeItem;
      state.quantity -=1;
      // state.total += action.payload.price * action.payload.quantity;
    },
    removeAllProduct: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, removeAllProduct,removeProduct } = cartSlice.actions;
export default cartSlice.reducer;