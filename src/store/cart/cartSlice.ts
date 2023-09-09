import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: string;
  title: string;
  price: number;
  currency?: string;
  image?: string;
};

export interface CartState {
  value: Product[];
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      //add product to cart
      state.value.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.value.find((product) => product.id === action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
