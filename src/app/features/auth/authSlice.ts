import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type User = {
  accessToken: string;
  user: {
    id: string;
    username: string;
  };
};
const storedUserInfo = localStorage.getItem("userInfo");

type AuthState = {
  userInfo: { id: string; username: string } | null;
};

const initialState: AuthState = {
  userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<User>) => {
      const { user } = action.payload;
      state.userInfo = user;
      localStorage.setItem("userInfo", JSON.stringify(user));
    },
    clearCredentials: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
// export const selectCurrentToken = (state: RootState) => state;
export default authSlice.reducer;
