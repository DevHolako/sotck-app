import { apiSlice } from "./apiSlice";
import { logOut } from "../store/app/authSlice";
import { toast } from "react-toastify";
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credential) => ({
        url: "/api",
        method: "POST",
        body: { ...credential },
      }),
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: "/api/logout",
        method: "POST",
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          toast.success(data);
          dispatch(logOut());
          dispatch(apiSlice.util.resetApiState());
        } catch (error) {
          console.log(error);
        }
      },
    }),

    refresh: builder.mutation({
      query: () => ({
        url: "/api/refresh",
        method: "GET",
      }),
    }),
  }),
});

export const { } =
  authApiSlice;
