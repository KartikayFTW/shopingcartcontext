import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <>
      <span className="header">Cart Context API</span>
      <ul className="nav">
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
