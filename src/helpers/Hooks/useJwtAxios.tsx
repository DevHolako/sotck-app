import { useEffect } from "react";
import JwtAxios from "../../app/axios";
import useRefreshToken from "./useRefreshToken";

const useJwtAxios = () => {
  const token = localStorage.getItem("token");
  const refresh = useRefreshToken();
  useEffect(() => {
    const reqInter = JwtAxios.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const resInter = JwtAxios.interceptors.response.use(
      (res) => res,
      async (err) => {
        const prevReq = err?.config;
        if (err?.response?.status === 403 && !prevReq?.sent) {
          prevReq.sent = true;
          const newAccessToken = await refresh();
          prevReq.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return JwtAxios(prevReq);
        }
        return Promise.reject(err);
      }
    );

    () => {
      JwtAxios.interceptors.request.eject(reqInter);
      JwtAxios.interceptors.response.eject(resInter);
    };
  }, [refresh]);
  return JwtAxios;
};

export default useJwtAxios;
