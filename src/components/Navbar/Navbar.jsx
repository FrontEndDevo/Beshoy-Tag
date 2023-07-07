import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";
import Lottie from "react-lottie";
import * as sunmoonAnimation from "../../assets/Animations/sunmoon-toggle.json";
import DarkModeContext from "../../store/darkMode-context";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const darkModeCtx = useContext(DarkModeContext);

  const sunmoonOptions = {
    loop: false,
    autoplay: false,
    animationData: sunmoonAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navLinks = (
    <ul className={openMenu ? classes["open-menu"] : classes["close-menu"]}>
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
  );

  const openMenuHandler = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.title}>
        <h1>Beshoy Tag</h1>
      </div>
      <div className={classes["nav-links"]}>
        <div
          className={`${classes.menu} ${openMenu && classes.open}`}
          onClick={openMenuHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {navLinks}
      </div>
      <div className={classes.sunmoon} onClick={darkModeCtx.toggleDarkMode}>
        <Lottie
          direction={darkModeCtx.isDarkModeOn && -1}
          options={sunmoonOptions}
          height={100}
          width={100}
        />
      </div>
    </nav>
  );
};

export default Navbar;
