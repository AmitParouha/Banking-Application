import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="header">
      <div>
        <h1 className="poppins-semibold">SwiftBank</h1>
      </div>
      <nav className="menu poppins-regular ">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
