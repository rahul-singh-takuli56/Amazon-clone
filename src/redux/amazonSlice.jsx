import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  useInfo: [],
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addToCart } = amazonSlice.actions;
export default amazonSlice.reducer;

/* const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }*/
