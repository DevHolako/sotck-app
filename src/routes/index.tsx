import { createBrowserRouter } from "react-router-dom";
import Client from "../pages/Client";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Stock from "../pages/Stock";
import Invoice from "../pages/Invoice";
import RequireLogin from "../helpers/RequireLogin";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },

  {
    element: <RequireLogin />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Client />,
          },
          {
            path: "Stock",
            element: <Stock />,
          },
          {
            path: "invoice",
            element: <Invoice />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
