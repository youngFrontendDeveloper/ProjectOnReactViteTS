import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserInfo } from "../../../models/models";

interface ILoginRequest {
  username: string;
  password: string;
}

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
