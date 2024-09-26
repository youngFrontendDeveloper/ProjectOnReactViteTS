import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserInfo } from "../../../models/models";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<IUserInfo, void>({
      query: () => ({
        url: `${import.meta.env.VITE_USER_URL}`,
      }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
