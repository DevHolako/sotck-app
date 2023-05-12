import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

//** for JWT  */
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL as string,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState();
    if (token) headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["auth"],
  endpoints: (build) => ({}),
});
