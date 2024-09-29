// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ICart } from "../../../models/models";

// interface ProductState {
//   id: number;
//   title: string;
//   price: number;
//   quantity: number;
//   cart: ICart | null;
// }
// const initialState: ProductState = {
//   id: 0,
//   title: "",
//   price: 0,
//   quantity: 0,
//   cart: null,
// };

// export const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     addProductInCart: (state, action: PayloadAction<ICart>) => {
//       state.cart = action.payload;
//     },
//     removeProductFromCart: (state, action: PayloadAction<ICart>) => {
//       state.cart = action.payload;
//     },
//     updateProductQuantityInCart: (state, action: PayloadAction<ICart>) => {
//       state.cart = action.payload;
//     },
//   },
// });
