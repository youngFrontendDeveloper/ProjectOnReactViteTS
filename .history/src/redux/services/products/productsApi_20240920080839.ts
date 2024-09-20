import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct, IProducts} from "../../../models/models.ts";

export interface IArg{
    searchWord: string,
    limit: number,
    skip: number,
}

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    tagTypes: ["Products", "Product"],
    endpoints: (builder) => ({
        getProducts: builder.query<IProducts, IArg >({
            query: ({
                        searchWord,
                        limit,
                        skip,
                        page
                    }) => ({
                url: `${import.meta.env.VITE_PRODUCTS_URL}/search?`,
                params: {
                    q: searchWord,
                    limit: limit,
                    skip: skip,
                    page: page,
                }
            }),           
        }),

        getProductById: builder.query<IProduct, number>({
            query: (id) => `${import.meta.env.VITE_PRODUCTS_URL}/${id}`,
        }),
       
    })
})

export const {useGetProductsQuery, useGetProductByIdQuery} = productsApi;