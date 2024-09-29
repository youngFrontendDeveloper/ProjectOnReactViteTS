import { createSlice } from "@reduxjs/toolkit";

export interface AuthSliceState {
  token: string | null;
}

const tokenFromLocalStorage = localStorage.getItem("token");

const initialState: AuthSliceState = {
  token: tokenFromLocalStorage || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    removeToken(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
