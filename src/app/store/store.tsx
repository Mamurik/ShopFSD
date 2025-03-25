// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../../entities/slices/ProductSlice";
import { ProductApi } from "../../entities/services/ProductApi";

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
