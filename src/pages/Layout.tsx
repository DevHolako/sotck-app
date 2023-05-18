import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

function Layout() {
  const nav = useNavigate();
  useEffect(() => {}, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;
