import "../styles/login/index.css";
import { useRef, useEffect } from "react";
import { type FormEvent } from "react"; // import FormEvent type
import LoginButton from "../components/LoginButton";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import axios, { AxiosError } from "axios";
import { User, loginData } from "../helpers/types";
import { useNavigate } from "react-router-dom";
function Login() {
  console.log("mode => ", import.meta.env.MODE);
  console.log("api => ", import.meta.env.VITE_API_URL);
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const signIn = useSignIn();

  const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.current && password.current) {
      const data = {
        username: email.current.value,
        password: password.current.value,
      };
      LoginRequest(data);
    }
  };

  const LoginRequest = async (data: loginData) => {
    const url = import.meta.env.VITE_API_URL;
    try {
      const response = await axios.post<User>(
        `${url}/api/login`,
        JSON.stringify(data),
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { accessToken } = response.data;
      signIn({
        token: accessToken,
        expiresIn: 10,
        tokenType: "Bearer",
        authState: { user: data.username },
        refreshToken: accessToken,
        refreshTokenExpireIn: 10,
      });
      console.log("lol");
      navigate("/");
    } catch (error) {
      if (error && error instanceof AxiosError)
        console.log("error =>", error.response?.data.message);
    }
  };

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }

    return () => {};
  }, [isAuthenticated]);

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
          <LoginButton type={"submit"} label="Love you 💖" />
          <button type="reset">reste</button>
        </form>
      </div>
    </main>
  );
}

export default Login;
