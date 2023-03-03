import { useContext, useEffect, useRef } from "react";
import classes from "./Home.module.scss";
import { init } from "ityped";
import photo from "../../assets/me/Beshoy_Tag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import gmail from "../../assets/icons/gmail.png";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import developerResume from "../../assets/Beshoy_Tag.pdf";
import DarkModeContext from "../../store/darkMode-context";
// Social Media hyperlinks.
const HYPERLINKS = {
  linkedin: "https://linkedin.com/in/Beshoy-Tag",
  github: "https://github.com/FrontEndDevo",
  facebook: "https://www.facebook.com/BeshoyTag1/",
  gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=mylinkacco@gmail.com",
};

const Home = () => {
  const darkMode = useContext(DarkModeContext);

  // That's all about iTyped.js package, it adds nice animation.
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      startDelay: 500,
      backDelay: 1000,
      strings: ["Front-End developer", "ReactJS Developer", "Web Developer"],
    });
  }, []);

  const blank = "_blank";
  // Open different accounts
  const linkedinHandler = () => {
    window.open(HYPERLINKS.linkedin, blank);
  };

  const githubHandler = () => {
    window.open(HYPERLINKS.github, blank);
  };

  const facebookHandler = () => {
    window.open(HYPERLINKS.facebook, blank);
  };

  const gmailHandler = () => {
    window.open(HYPERLINKS.gmail, blank);
  };

  return (
    <div
      className={`${classes.home} ${
        darkMode.isDarkModeOn && classes["dark-mode"]
      }`}
    >
      <div className={classes["developer-photo"]}>
        <img src={photo} alt="developer" />
      </div>
      <div className={classes["developer-details"]}>
        <div className={classes["developer-info"]}>
          <h3>Hi There, I'm</h3>
          <h2>Beshoy Tag</h2>
          <h4>
            <span ref={textRef}></span>
          </h4>
        </div>
        <div className={classes["developer-contacts"]}>
          <FontAwesomeIcon
            icon={faLinkedin}
            className={classes["linked-in"]}
            onClick={linkedinHandler}
          />
          <FontAwesomeIcon
            icon={faGithub}
            className={classes["github"]}
            onClick={githubHandler}
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className={classes["facebook"]}
            onClick={facebookHandler}
          />
          <img src={gmail} alt="gmail icon" onClick={gmailHandler} />
        </div>
        <Link
          className={classes.resume}
          to={developerResume}
          target="_blank"
          download
        >
          <p>Download CV</p>
          <FontAwesomeIcon icon={faDownload} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
