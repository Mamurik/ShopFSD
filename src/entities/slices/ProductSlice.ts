import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/IProduct";

interface IProductSlice{
    products:IProduct[] | null,
}
const initialState:IProductSlice = {
    products:null
}
export const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setProducts:(state,action:PayloadAction<IProduct[]>)=>{
            state.products = action.payload
        }
    }
})
export const {setProducts} = ProductSlice.actions
export default ProductSlice.reducer