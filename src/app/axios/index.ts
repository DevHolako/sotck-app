import axios from "axios";

const JwtAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "aplication/json",
  },
  withCredentials: true,
});

export default JwtAxios;
