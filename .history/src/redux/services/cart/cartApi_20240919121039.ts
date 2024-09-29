import {ICart} from '../../../models/models.ts';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    tagTypes: ['Cart'],
    endpoints: (builder) => ({      
        getCart: builder.query<ICart, void>({query: () => import.meta.env.VITE_CART_URL,}),
        transformResponse: (response: ICart) => response,
    }),
});

export const {useGetCartQuery} = cartApi;
