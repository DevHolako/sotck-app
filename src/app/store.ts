import { configureStore } from "@reduxjs/toolkit";
// ...
// import UserSlice from "./Slices/userSlice";
import AuthSlice from "@features/auth/authSlice";
import ClientSlice from "@features/clients/clientSlice";
import StockSlice from "@features/stock/stockSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    client: ClientSlice,
    stock: StockSlice,
  },
  devTools: import.meta.env.VITE_ENV === "development",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
