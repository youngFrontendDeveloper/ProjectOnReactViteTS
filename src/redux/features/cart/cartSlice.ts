import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {ICart, ICartData} from "../../../models/models";

interface CartState {
    data?: ICartData | undefined;
    cart: ICart | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CartState = {
    data: {
        carts: [],
        limit: 12,
        skip: 0,
        total: 0,
    },
    cart: null,
    status: "idle",
    error: null,
};

export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async () => {
        const response = await fetch(import.meta.env.VITE_CART_URL);
        return await response.json();
    }
)

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        fetchCart: (state = initialState, action: PayloadAction<CartState>) => {
            state.cart = action.payload.cart;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
                state.cart = action.payload.carts[0] || null;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            })
    }
})

export const cartReducer = cartSlice.reducer;
