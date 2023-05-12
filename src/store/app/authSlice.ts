import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../helpers/types";
import { RootState } from "../store";

type initialState = {
  token: string | null;
};
const authSlice = createSlice({
  name: "auth",
  initialState: { token: null } as initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<User>) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export const selectCurrentToken = (state: RootState) => state.AuthSlice.token;
export default authSlice.reducer;
