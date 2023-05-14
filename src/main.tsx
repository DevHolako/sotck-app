import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AuthProvider } from "react-auth-kit";
import "rodal/lib/rodal.css";
import { refreshApi } from "./Auth/RefreshApi.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider
        authName="jwt-aut"
        authType="cookie"
        refresh={refreshApi}
        cookieSecure={import.meta.env.VITE_ENV === "produiction" ? true : false}
      >
        <App />
        <ToastContainer />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
