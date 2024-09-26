// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { IUserInfo } from "../../../models/models";

// interface AuthState {
//   loading: boolean;
//   userInfo: IUserInfo | null;
//   userToken: string | null;
//   error: string | null;
//   success: boolean;
// }

// const initialState: AuthState = {
//   loading: false,
//   userInfo: null,
//   userToken: null,
//   error: null,
//   success: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   // extraReducers: {},
// });

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
