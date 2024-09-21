import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../../../models/models.ts";


export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    tagTypes: ["Products", "Product"],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => import.meta.env.VITE_PRODUCTS_URL ,
        }),
        // transformResponse: (response: IProduct[]) => response,
    })
})

export const {useGetProductsQuery} = productsApi;