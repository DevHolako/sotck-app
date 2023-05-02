import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginData, User, UserState } from "../../helpers/types";
import { useSignIn } from "react-auth-kit";
export const LoginRequest = createAsyncThunk(
  "user/LoginRequest",
  async (data: loginData, thunkAPI) => {
    const signIn = useSignIn();
    try {
      const response = await axios.post<User>("/api/login", data, {
        headers: {
          Accept: "aplication/json",
          "Content-Type": "aplication/json",
        },
      });

      console.log(response.data);
      signIn;
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(LoginRequest.pending, (state) => {
        state.status = "pending";
      })
      .addCase(LoginRequest.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(LoginRequest.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default UserSlice.reducer;
