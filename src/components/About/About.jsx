import React from "react";
import classes from "./About.module.scss";
import aboutBG from "../../assets/svg/version_control.svg";
const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes["about-details"]}>
        <p>
          Hi, I am Beshoy, I'm a front-end web
          developer.
          <br /> I love combining the worlds of logic and creative design to make
          eye-catching, accessible and, user-friendly websites and applications.
          <br /> I love creating pages where I'm actually creating enjoyable
          interactions and experiences for everyone.
        </p>
      </div>
      <div className={classes["about-bg"]}>
        <img src={aboutBG} alt="about section background" />
      </div>
    </section>
  );
};

export default About;
