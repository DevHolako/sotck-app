import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Items, ItemsState } from "@helpers/types";
import JwtAxios from "@/app/axios";
import { toast } from "react-toastify";

type ItemPayload = {
  message: string;
  item?: Items;
  items?: Items[];
};

export const GetAllItems = createAsyncThunk(
  "item/GetAllItems",
  async (_, thunkAPI) => {
    try {
      const response = await JwtAxios.get("/api/items");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const CreateItems = createAsyncThunk(
  "item/CreateItems",
  async (item: Items, thunkAPI) => {
    try {
      const response = await JwtAxios.post("/api/items", JSON.stringify(item));
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
export const UpdateItem = createAsyncThunk(
  "item/UpdateItem",
  async (item: Items, thunkAPI) => {
    try {
      const response = await JwtAxios.put(
        `/api/items/${item._id}`,
        JSON.stringify(item)
      );

      return response?.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
export const DeleteItem = createAsyncThunk(
  "item/DeleteItem",
  async (id: string, thunkAPI) => {
    try {
      const response = await JwtAxios.delete(`/api/items/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

const initialState: ItemsState = {
  items: [],
  filteredData: [],
  status: "idle",
  error: null,
};

const StockSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    search: (state, action) => {
      const query = action.payload;
      const filteredData = state.items.filter((row) =>
        row.name.includes(query)
      );
      state.filteredData = filteredData;
    },
  },
  extraReducers(builder) {
    builder
      /** Read */
      .addCase(GetAllItems.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        GetAllItems.fulfilled,
        (state, action: PayloadAction<ItemPayload>) => {
          state.status = "succeeded";
          const { items } = action.payload;
          state.items = items as Items[];
          state.filteredData = state.items;
        }
      )
      .addCase(GetAllItems.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      })
      /** Create */
      .addCase(CreateItems.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        CreateItems.fulfilled,
        (state, action: PayloadAction<ItemPayload>) => {
          state.status = "succeeded";
          const { item, message } = action.payload;
          toast.success(message);
          state.items.unshift(item as Items);
          state.filteredData = state.items;
        }
      )
      .addCase(CreateItems.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        const { message } = action.payload;
        toast.error(message);
        state.error = action.payload;
      })
      /** Update */
      .addCase(UpdateItem.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        UpdateItem.fulfilled,
        (state, action: PayloadAction<ItemPayload>) => {
          state.status = "succeeded";
          const { item, message } = action.payload;
          const { _id } = item as Items;
          const index = state.items.findIndex((obj) => obj._id === _id);
          console.log(index);
          state.items[index] = item as Items;
          console.log(state.items[index]);
          console.log(item);
          state.filteredData = state.items;
          toast.success(message);
        }
      )
      .addCase(UpdateItem.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      })
      /** Delete */
      .addCase(DeleteItem.pending, (state) => {
        state.status = "pending";
      })
      .addCase(DeleteItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        const id = action.meta.arg;
        state.items = state.items.filter((item) => item._id !== id);
        state.filteredData = state.items;
        toast.success("Item deleted successfly");
      })
      .addCase(DeleteItem.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { search } = StockSlice.actions;

export default StockSlice.reducer;
