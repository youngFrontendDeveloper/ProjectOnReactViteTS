import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct, IProducts} from "../../../models/models.ts";


export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    tagTypes: ["Products", "Product"],
    endpoints: (builder) => ({
        getProducts: builder.query<IProducts, {string, number, number}>({
            query: ({
                        searchWord,
                        limit,
                        skip
                    }) => ({
                url: `${import.meta.env.VITE_PRODUCTS_URL}/search?`,
                params: {
                    q: searchWord,
                    limit: limit,
                    skip: skip,
                }
            }),
            // query: ({
            //             searchWord,
            //             limit,
            //             skip
            //         }) => `${import.meta.env.VITE_PRODUCTS_URL}/search?q=${searchWord}&limit=${limit}&skip=${skip}`,
        }),

        getProductById: builder.query<IProduct, number>({
            query: (id) => `${import.meta.env.VITE_PRODUCTS_URL}/${id}`,
        }),
        // transformResponse: (response: IProduct[]) => response,
    })
})

export const {useGetProductsQuery, useGetProductByIdQuery} = productsApi;