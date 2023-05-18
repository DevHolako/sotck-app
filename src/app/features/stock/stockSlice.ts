import { createSlice } from "@reduxjs/toolkit";
import { ItemsState } from "@helpers/types";

const initialState: ItemsState = {
  items: [],
  status: "idle",
  error: null,
};

const StockSlice = createSlice({
  name: "sotck",
  initialState,
  reducers: {},
  extraReducers() {},
});

export default StockSlice.reducer;
