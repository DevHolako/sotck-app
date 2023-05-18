import JwtAxios from "../../app/axios";
import { useAppDispatch } from "./redux-hooks";
import { setCredentials } from "../../app/features/auth/authSlice";
import { User } from "../types";

const useRefreshToken = () => {
  const dispatch = useAppDispatch();
  const refresh = async () => {
    const res = await JwtAxios.get("/api/refresh");
    dispatch(setCredentials(res.data as User));
    const { accessToken } = res.data;
    return accessToken;
  };
  return refresh;
};

export default useRefreshToken;
