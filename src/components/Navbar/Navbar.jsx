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
            <NavLink
              activeClassName={classes["class-active"]}
              to="/Beshoy-Tag/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Beshoy-Tag/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/Beshoy-Tag/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/Beshoy-Tag/skills">Skills</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
