/*css*/
import "@styles/login/index.css";
/*css*/
import { useAppSelector } from "@/helpers/Hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import LoginButton from "@compo/LoginButton";
import { LoginRequest } from "@/helpers/Requests";
import Loader from "@/components/Loader";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo } = useAppSelector((s) => s.auth);
  const navigate = useNavigate();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (userInfo !== null) {
      navigate("/");
    }
  }, []);

  const HandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.current || !password.current) {
      return toast.info("all fileds are required");
    }
    setIsLoading(true);
    const data = {
      username: email.current.value,
      password: password.current.value,
    };
    await LoginRequest(data);
    setIsLoading(true);
    navigate("/dash");
  };

  return (
    <main>
      <div className="login-box container">
        <p>Login</p>
        <form onSubmit={HandleSubmit}>
          <div className="user-box">
            <input required name="" type="text" ref={email} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input required name="" type="password" ref={password} />
            <label>Password</label>
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <LoginButton type={"submit"} label="Love you 💖" />
          )}
        </form>
      </div>
    </main>
  );
}

export default Login;
