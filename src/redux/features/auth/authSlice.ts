import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
}

const tokenFromLocalStorage = localStorage.getItem("token");

const initialState: AuthState = {
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

// export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (data, { rejectWithValue }) => {
//   try {
//     const response = await fetch(
//       `${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_AUTH_URL}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: data.login,
//           password: data.password,
//           expiresInMins: 60, // optional, defaults to 60
//         }),
//       },
//     );

//     console.log(response);

//     if (!response.ok) {
//       throw new Error("Could not fetch auth data");
//     }

//     return await response.json();
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       return rejectWithValue(err.message);
//     } else {
//       return rejectWithValue("Something went wrong");
//     }
//   }
// });

// export const authReducer = authSlice.reducer;
