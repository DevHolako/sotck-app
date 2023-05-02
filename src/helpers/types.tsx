type User = {
  token: string;
};

type loginData = {
  email: string;
  password: string;
};

interface UserState {
  user: null | User;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

export type { loginData, UserState, User };
