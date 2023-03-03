import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";
import Lottie from "react-lottie";
import * as sunmoonAnimation from "../../assets/Animations/sunmoon-toggle.json";
import DarkModeContext from "../../store/darkMode-context";

const Navbar = () => {
  const darkModeCtx = useContext(DarkModeContext);

  const sunmoonOptions = {
    loop: false,
    autoplay: false,
    animationData: sunmoonAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
      <div className={classes.sunmoon} onClick={darkModeCtx.toggleDarkMode}>
        <Lottie
          direction={darkModeCtx.isDarkModeOn && -1}
          options={sunmoonOptions}
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default Navbar;
