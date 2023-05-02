import { useAppSelector } from "./hookes";

const isLogedIn = () => {
  const { user } = useAppSelector((state) => state.UserSlice);
  if (user) return true;
  return false;
};

export { isLogedIn };
