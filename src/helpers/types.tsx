type User = {
  accessToken: string;
  user: {
    id: string;
    username: string;
  };
};

type loginData = {
  username: string;
  password: string;
};

type Client = {
  _id: string;
  nom: string;
  prenom: string;
  email: string;
  address: string;
};

interface ClientState {
  clients: Client[];
  filteredData: [] | Client[]; // Filtered data
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}
type Items = {
  _id: string;
  nom: string;
};

interface ItemsState {
  items: [] | Items[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

export type { loginData, ClientState, User, Client, Items, ItemsState };
