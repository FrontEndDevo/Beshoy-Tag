import classes from "./SingleSkill.module.scss";
import { useContext } from "react";
import DarkMoodContext from "../../../store/darkMood-context";

const SingleSkill = (props) => {
  const darkMode = useContext(DarkMoodContext);

  return (
    <li
      className={`${classes["tech-box"]} ${
        darkMode.isDarkMoodOn && classes["dark-mode"]
      }`}
    >
      <img src={props.icon} alt={`${props.title}-icon`} />
      <span>{props.title}</span>
    </li>
  );
};

export default SingleSkill;
