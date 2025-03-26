import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../entities/types/IProduct";

interface ILikeSlice{
    likes:IProduct[]
}
const initialState:ILikeSlice = {
    likes:[]
}
 const LikeSlice = createSlice({
    name:"likes",
    initialState,
    reducers:{
        setLikes:(state,action:PayloadAction<IProduct[]>)=>{
            state.likes = action.payload
        },
        addLike: (state, action: PayloadAction<IProduct>) => {
            state.likes.push(action.payload);
        },
        removeLike: (state, action: PayloadAction<IProduct>) => {
            state.likes = state.likes.filter(product => product.id !== action.payload.id);
        },

    }
})
export const {setLikes,addLike,removeLike} = LikeSlice.actions
export default LikeSlice.reducer