type User = {
  accessToken: string;
  refreshToken: string;
};

type loginData = {
  username: string;
  password: string;
};

interface UserState {
  user: null | User;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

export type { loginData, UserState, User };
