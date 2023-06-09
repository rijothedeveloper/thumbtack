import Logo from "../../assets/Logo.svg";
import { AiOutlineDown } from "react-icons/ai";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menu">
        <div className="nav-btn nav-btn-primary">
          <button>Join as a pro</button>
        </div>

        <div className="nav-btn nav-btn-menu">
          <button>Explore</button>
          <div className="down-char">
            <AiOutlineDown />
          </div>
        </div>

        <div className="nav-btn nav-btn-menu">
          <button>Sign up</button>
        </div>

        <div className="nav-btn nav-btn-menu">
          <button>Login in</button>
        </div>
      </div>
    </div>
  );
}
