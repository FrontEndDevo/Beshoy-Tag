import classes from "./Home.module.scss";
import photo from "../../assets/me/Linked in.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className={classes.home}>
      <div>
        <img src={photo} alt="developer" />
      </div>
      <div className={classes["developer-details"]}>
        <div className={classes["developer-info"]}>
          <h3>Hi There, I'm</h3>
          <h2>Beshoy Tag</h2>
          <h4>
            Front-End <span>Web Developer</span>
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
