import classes from "./Home.module.scss";
import { init } from "ityped";
import photo from "../../assets/me/Linked in.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";

const Home = () => {
  // That's all about iTyped.js package, it adds nice animation.
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      startDelay: 500,
      backDelay: 1000,
      strings: ["Front-End","Web Developer"],
    });
  }, []);

  return (
    <div className={classes.home}>
      <div className={classes["developer-photo"]}>
        <img src={photo} alt="developer" />
      </div>
      <div className={classes["developer-details"]}>
        <div className={classes["developer-info"]}>
          <h3>Hi There, I'm</h3>
          <h2>Beshoy Tag</h2>
          <h4><span ref={textRef}></span>
          </h4>
        </div>
        <div className={classes["developer-contacts"]}>
          <FontAwesomeIcon icon={faLinkedin} className={classes["linked-in"]} />
          <FontAwesomeIcon icon={faGithub} className={classes["github"]} />
          <FontAwesomeIcon icon={faFacebook} className={classes["facebook"]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
