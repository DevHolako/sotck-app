import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Items, ItemsState } from "@helpers/types";
import JwtAxios from "@/app/axios";

export const GetAllClients = createAsyncThunk(
  "client/GetAllClients",
  async (_, thunkAPI) => {
    try {
      const response = await JwtAxios.get("/api/clients");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const UpdateClient = createAsyncThunk(
  "client/UpdateClient",
  async (_, thunkAPI) => {
    try {
      const response = await JwtAxios.post<Items>("/api/clients");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const DeleteClient = createAsyncThunk(
  "client/GetAllClients",
  async (_, thunkAPI) => {
    try {
      const response = await JwtAxios.get("/api/clients");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState: ItemsState = {
  items: [],
  status: "idle",
  error: null,
};

const UserSlice = createSlice({
  name: "sotck",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetAllClients.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        GetAllClients.fulfilled,
        (state, action: PayloadAction<Items[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(GetAllClients.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default UserSlice.reducer;
