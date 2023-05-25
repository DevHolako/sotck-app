import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from "@/helpers/utils";
const useAuth = () => {
  const logedIn = isLogin();
  return logedIn;
};
function RequireLogin() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default RequireLogin;
