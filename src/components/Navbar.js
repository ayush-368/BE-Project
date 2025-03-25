import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo.jpg" alt="Logo" className="logo" />
      </div>
      <div className="homeButton">
        Home Page
      </div>
      <div className="aboutButton">
        About Us
      </div>
    </nav>
  );
};

export default Navbar;
