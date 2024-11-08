import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICart, ICartData } from "../../../models/models";

export interface CartState {
  data?: ICartData | undefined;
  cart: ICart | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface ProductData {
  cartId: number;
  totalProducts?: number;
  products: {
    id: number;
    quantity: number;
  }[];
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
  async (id: number, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_CART_URL}/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }

      return await response.json();
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  },
);

export const updateProductsInCart = createAsyncThunk(
  "cart/addProductToCart",
  async (data: ProductData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${import.meta.env.VITE_CARTS}/${data.cartId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          merge: false,
          totalProducts: data.totalProducts,
          products: [...data.products],
        }),
      });

      if (!response.ok) {
        throw new Error("Could not add product to cart");
      }

      return await response.json();
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  },
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.data = action.payload;
        state.cart = action.payload.carts[0] || null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(updateProductsInCart.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateProductsInCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.cart = action.payload;
      })
      .addCase(updateProductsInCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const cartReducer = cartSlice.reducer;
