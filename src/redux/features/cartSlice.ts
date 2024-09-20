import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICart} from "../../models/models.ts";

interface CartState {
    cart?: ICart | undefined;
}

const initialState: CartState = {
    cart: {
        "id": 5,
        "products": [],
        "total": 0,
        "discountedTotal": 0,
        "userId": 0,
        "totalProducts": 0,
        "totalQuantity": 0,
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
export default cartSlice.reducer;

// export const cartActions = cartSlice.actions;
// export const cartReducer = cartSlice.reducer;


