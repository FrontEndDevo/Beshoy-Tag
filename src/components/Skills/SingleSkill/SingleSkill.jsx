import classes from "./SingleSkill.module.scss";
import { useContext } from "react";
import DarkModeContext from "../../../store/darkMode-context";

const SingleSkill = (props) => {
  const darkMode = useContext(DarkModeContext);

  return (
    <li
      className={`${classes["tech-box"]} ${
        darkMode.isDarkModeOn && classes["dark-mode"]
      }`}
    >
      <img src={props.icon} alt={`${props.title}-icon`} />
      <span>{props.title}</span>
    </li>
  );
};

export default SingleSkill;
