import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.title}>
        <h1>Beshoy Tag</h1>
      </div>
      <div className={classes["nav-links"]}>
        <ul>
          <li>
            <NavLink activeClassName={classes["class-active"]} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
