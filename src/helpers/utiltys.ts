import { useAuthHeader } from "react-auth-kit";
import { useAppSelector } from "./hookes";

const isLogedIn = () => {
  const { user } = useAppSelector((state) => state.UserSlice);
  if (user) return true;
  return false;
};

const userToken = () => {
  const token = useAuthHeader();
  return token();
};

export { isLogedIn, userToken };
