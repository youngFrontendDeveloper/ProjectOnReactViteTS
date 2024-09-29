import { ICart } from '../../../models/models.ts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getCart: builder.query<ICart, void>({
      query: () => import.meta.env.VITE_CART_URL,
    }),
  }),
});

export const { useGetCartQuery } = cartApi;
