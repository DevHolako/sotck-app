import "../styles/login/index.css";
import { useRef } from "react";
import { type FormEvent } from "react"; // import FormEvent type
import LoginButton from "../components/LoginButton";
import { useSignIn } from "react-auth-kit";
import axios, { AxiosError } from "axios";
import { User, loginData } from "../helpers/types";
import { useNavigate } from "react-router-dom";
function Login() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const signIn = useSignIn();
  const navigate = useNavigate();

  const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.current && password.current) {
      const data = {
        email: email.current.value,
        password: password.current.value,
      };
      LoginRequest(data);

      clearValues();
    }
  };

  const clearValues = () => {
    email.current && (email.current.value = "");
    password.current && (password.current.value = "");
  };

  const LoginRequest = async (data: loginData) => {
    const url = "http://192.168.1.10:3000/login";
    try {
      const response = await axios.post<User>(url, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: data.email },
      });

      navigate("/");
    } catch (error) {
      if (error && error instanceof AxiosError)
        console.log("error =>", error.response?.data.message);
    }
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
          <LoginButton type={"submit"} label="Love you 💖" />
        </form>
      </div>
    </main>
  );
}

export default Login;
