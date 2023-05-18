import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "@hooks/redux-hooks";

function RequireLogin() {
  const { userInfo } = useAppSelector((s) => s.auth);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(userInfo);
    if (userInfo === null) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}

export default RequireLogin;
