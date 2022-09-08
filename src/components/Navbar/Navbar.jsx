import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo5.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#exercises"> Exercises</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
