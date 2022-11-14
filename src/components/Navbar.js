import React from "react";
import airbnbLogo from "../airbnb-logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <img className="nav-logo" src={airbnbLogo} alt="" />
    </nav>
  );
};

export default Navbar;
