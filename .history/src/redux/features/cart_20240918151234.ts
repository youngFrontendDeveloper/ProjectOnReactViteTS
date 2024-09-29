import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CartState {
    cart: ICart | null;
}

const initialState: CartState = {
    cart: {
        "id": 0,
    "products": [],
    "total": 0,
    "discountedTotal": 0,
    "userId": 0,
    "totalProducts": 0,  
    },
};

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {

        getCart: (state, action: PayloadAction<CartState>) => {
            state.cart = action.payload.cart;
        },
    },
});

export const {getCart} = cartSlice.actions;
// ? Export the authSlice.reducer to be included in the store.
export default cartSlice.reducer;

export interface ICart {
    "id": number,
    "products": IProduct[],
    "total": number,
    "discountedTotal": number,
    "userId": number,
    "totalProducts": number,
}

interface IProduct {
    "id": number,
    "title": string,
    "price": number,
    "quantity": number,
    "total": number,
    "discountPercentage": number,
    "discountedTotal": number,
    "thumbnail": string
}
