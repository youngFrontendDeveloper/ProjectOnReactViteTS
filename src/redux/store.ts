import {configureStore} from '@reduxjs/toolkit';
import {productsApi} from "./services/products/productsApi.ts";
import {cartReducer} from './features/cart/cartSlice.ts';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    
    devTools: import.meta.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([productsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
