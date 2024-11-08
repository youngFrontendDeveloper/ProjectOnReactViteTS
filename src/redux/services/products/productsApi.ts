import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, IProducts } from "../../../models/models";

export interface IArg {
  searchWord: string;
  limit: number;
  skip: number;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Products", "Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<IProducts, IArg>({
      query: ({ searchWord, limit, skip }) => ({
        url: `${import.meta.env.VITE_PRODUCTS_URL}/search?`,
        params: {
          q: searchWord,
          limit: limit,
          skip: skip,
        },
      }),
    }),

    getProductById: builder.query<IProduct, string>({
      query: (id) => `${import.meta.env.VITE_PRODUCTS_URL}/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
