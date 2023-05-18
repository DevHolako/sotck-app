import { useState } from "react";
import "@styles/navbar/index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/dentist.png";
import { SignOut } from "@phosphor-icons/react";
import { logout } from "@/helpers/Requests";
function NavBar() {
  const nav = useNavigate();
  const loc = useLocation();
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="">
      <Link to="/dash">
        <img src={logo} alt="logo" height={85} />
      </Link>

      <div>
        <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
          <li>
            <Link
              className={loc.pathname == "/" ? "active" : ""}
              to=""
              onClick={() => setClicked(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={loc.pathname == "/stock" ? "active" : ""}
              to="stock"
              onClick={() => setClicked(false)}
            >
              Stock
            </Link>
          </li>
          <li>
            <Link
              className={loc.pathname == "/invoice" ? "active" : ""}
              to="invoice"
              onClick={() => setClicked(false)}
            >
              Facture
            </Link>
          </li>
          <li>
            <button
              onClick={async () => {
                await logout();
                nav("/");
              }}
              className="dc-button"
            >
              <SignOut />
            </button>
          </li>
        </ul>
      </div>

      <div id="mobile">
        {/* <Icon /> */}
        <input
          type="checkbox"
          id="checkbox"
          onChange={handleClick}
          checked={clicked}
        />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </div>
    </nav>
  );
}

export default NavBar;
