import JwtAxios from "@/app/axios";
import {
  clearCredentials,
  setCredentials,
} from "@/app/features/auth/authSlice";
import { GetAllClients } from "@/app/features/clients/clientSlice";
import { store } from "@/app/store";
import { User, loginData } from "@helpers/types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const LoginRequest = async (data: loginData) => {
  try {
    console.log("trying ...");
    const response = await JwtAxios.post<User>(
      "/api/login",
      JSON.stringify(data)
    );
    toast.success("💖 Wellcome back");
    return store.dispatch(setCredentials(response.data));
  } catch (error) {
    toast.warn("⚠️ server error please try again");
    if (error && error instanceof AxiosError) {
      console.log("error =>", error.response?.data.message);
      return toast(error.response?.data.message);
    }
    return console.log("error =>", error);
  }
};

export const logout = async () => {
  try {
    await JwtAxios.post("/api/logout");
    toast.success("👋 See you soon");
    store.dispatch(GetAllClients());
    return store.dispatch(clearCredentials());
  } catch (error: any) {
    toast.warn("⚠️ server error please try again");
    return console.log(error);
  }
};
