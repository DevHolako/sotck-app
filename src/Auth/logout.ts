import axios from "axios";

export const logout = async () => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    const { message } = res.data;
    console.log(message);
    return;
  } catch (error: any) {
    console.log(error.message);
    return;
  }
};
