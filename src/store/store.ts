import { configureStore } from "@reduxjs/toolkit";
// ...
import UserSlice from "./app/userSlice";
import AuthSlice from "./app/authSlice";

export const store = configureStore({
  reducer: {
    UserSlice,
    AuthSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
