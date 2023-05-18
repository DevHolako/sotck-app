import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ClientState, Client } from "@helpers/types";
import JwtAxios from "@/app/axios";
import { toast } from "react-toastify";
type ClientPayload = {
  message: string;
  client: Client;
};
export const GetAllClients = createAsyncThunk(
  "client/GetAllClients",
  async (_, thunkAPI) => {
    try {
      const response = await JwtAxios.get("/api/clients");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
export const CreateClients = createAsyncThunk(
  "client/CreateClients",
  async (client: Client, thunkAPI) => {
    try {
      const response = await JwtAxios.post(
        "/api/clients",
        JSON.stringify(client)
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
export const UpdateClient = createAsyncThunk(
  "client/UpdateClient",
  async (client: Client, thunkAPI) => {
    try {
      const response = await JwtAxios.put(
        `/api/clients/${client._id}`,
        JSON.stringify(client)
      );

      return response?.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
export const DeleteClient = createAsyncThunk(
  "client/DeleteClient",
  async (id: string, thunkAPI) => {
    try {
      const response = await JwtAxios.delete(`/api/clients/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

const initialState: ClientState = {
  clients: [],
  filteredData: [], // Filtered data
  status: "idle",
  error: null,
};

const ClientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    search: (state, action) => {
      const query = action.payload.toLowerCase();
      const filteredData = state.clients.filter(
        (row) =>
          row.nom.toLocaleLowerCase().includes(query) ||
          row.prenom.toLocaleLowerCase().includes(query) ||
          row.email.toLocaleLowerCase().includes(query) ||
          row.address.toLocaleLowerCase().includes(query)
      );
      state.filteredData = filteredData;
    },
  },
  extraReducers(builder) {
    builder
      /** Read */
      .addCase(GetAllClients.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        GetAllClients.fulfilled,
        (state, action: PayloadAction<Client[]>) => {
          state.status = "succeeded";
          state.clients = action.payload;
          state.filteredData = state.clients;
        }
      )
      .addCase(GetAllClients.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      })
      /** Create */
      .addCase(CreateClients.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        CreateClients.fulfilled,
        (state, action: PayloadAction<ClientPayload>) => {
          state.status = "succeeded";
          const { client, message } = action.payload;
          toast.success(message);
          state.clients.unshift(client);
          state.filteredData = state.clients;
        }
      )
      .addCase(CreateClients.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        const { message } = action.payload;
        toast.error(message);
        state.error = action.payload;
      })
      /** Update */
      .addCase(UpdateClient.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        UpdateClient.fulfilled,
        (state, action: PayloadAction<ClientPayload>) => {
          state.status = "succeeded";
          const { client, message } = action.payload;
          const { _id } = client;
          const index = state.clients.findIndex((obj) => obj._id === _id);
          console.log(index);
          state.clients[index] = client;
          console.log(state.clients[index]);
          console.log(client);
          state.filteredData = state.clients;
          toast.success(message);
        }
      )
      .addCase(UpdateClient.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      })
      /** Delete */
      .addCase(DeleteClient.pending, (state) => {
        state.status = "pending";
      })
      .addCase(DeleteClient.fulfilled, (state, action) => {
        state.status = "succeeded";
        const id = action.meta.arg;
        state.clients = state.clients.filter((client) => client._id !== id);
        state.filteredData = state.clients;
        toast.success("User deleted successfly");
      })
      .addCase(DeleteClient.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { search } = ClientSlice.actions;

export default ClientSlice.reducer;
