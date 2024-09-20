import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CartState {
    cart?: ICart | null;
}

const initialState: CartState = {
    cart: {},
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
    "products": [
        {
            "id": 144,
            "title": "Cricket Helmet",
            "price": 44.99,
            "quantity": 4,
            "total": 179.96,
            "discountPercentage": 11.47,
            "discountedTotal": 159.32,
            "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png"
        },


    ],
    "total": 2492,
    "discountedTotal": 2140,
    "userId": 5,
    "totalProducts": 5,
}
