import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice.ts';
import {cartApi} from './services/cart/cartApi.ts';
import {productsApi} from "./services/products/productsApi.ts";

export const store = configureStore({
    reducer: {
        cartState: cartReducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    devTools: import.meta.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([cartApi.middleware, productsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
