import axios from "axios";
import { createRefresh } from "react-auth-kit";
export const refreshApi = createRefresh({
  interval: 1,
  // Refreshs the token in every 10 minutes
  refreshApiCallback: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/refresh`,
        {
          withCredentials: true,
        }
      );
      const { accessToken } = response.data;
      console.log(accessToken);
      if (!accessToken) throw new Error();
      return {
        isSuccess: true,
        newAuthToken: accessToken as string,
      };
    } catch (error) {
      return {
        isSuccess: false,
        newAuthToken: "",
      };
    }
  },
});
