import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/IProduct";

interface IProductSlice {
  products: IProduct[] | null;
  currentPage: number;
  perPage: number;
  totalCount: number;
}

const initialState: IProductSlice = {
  products: null,
  currentPage: 1,
  perPage: 8,
  totalCount: 0,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    addProduct: (state, action: PayloadAction<IProduct>) => {
      if (state.products) {
        state.products.push(action.payload);
      } else {
        state.products = [action.payload]; 
      }
    },
  },
});

export const { setProducts, setCurrentPage, addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;