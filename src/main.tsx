import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AuthProvider } from "react-auth-kit";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider
        authName={"auth"}
        authType="cookie"
        cookieSecure={false}
        cookieDomain={window.location.hostname}
      >
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
