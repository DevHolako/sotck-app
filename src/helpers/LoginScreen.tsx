import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const goto = useNavigate();
  useEffect(() => goto("/"), []);
  return <div>LoginScreen</div>;
}

export default LoginScreen;
