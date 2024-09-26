import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/products/productsApi";
import { userReducer } from "./features/user/userSlice";
import { cartReducer } from "./features/cart/cartSlice";
import { authApi } from "./services/auth/authApi";
// import { authReducer } from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    // auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, productsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
