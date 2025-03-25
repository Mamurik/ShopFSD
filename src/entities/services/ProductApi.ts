import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../types/IProduct";


export const ProductApi = createApi({
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com/'}),
    reducerPath:"productApi",
    endpoints:(build)=>({
        getProducts:build.query<IProduct[],void>({
            query:()=> "products"
        }),
        getProductsById:build.query<IProduct,string>({
            query:(name)=> `products/${name}`
        })
    })
})

export const {useGetProductsQuery,useGetProductsByIdQuery} = ProductApi