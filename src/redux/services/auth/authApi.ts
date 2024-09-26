import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserInfo } from "../../../models/models";

interface ILoginRequest {
  username: string;
  password: string;
}

// interface ILoginResponse {
//   id: number;
//   username: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   gender: string;
//   image: string;
//   accessToken: string;
//   refreshToken: string;
// }

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    login: build.mutation<IUserInfo, ILoginRequest>({
      query: (credentials) => ({
        url: `${import.meta.env.VITE_AUTH_URL}`,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;

// fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({

//     username: 'emilys',
//     password: 'emilyspass',
//     expiresInMins: 30, // optional, defaults to 60
//   }),
//   credentials: 'include' // Include cookies (e.g., accessToken) in the request
// })
// .then(res => res.json())
// .then(console.log);
