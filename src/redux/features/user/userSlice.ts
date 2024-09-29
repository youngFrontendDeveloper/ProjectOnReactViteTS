import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInfo } from "../../../models/models";

export interface UserState {
  user: IUserInfo | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserInfo | null>) => {
      state.user = action.payload;
    },

    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
