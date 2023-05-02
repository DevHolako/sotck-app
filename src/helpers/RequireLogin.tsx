import { Outlet } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
function RequireLogin() {
  return (
    <RequireAuth loginPath="/login">
      <Outlet />
    </RequireAuth>
  );
}

export default RequireLogin;
