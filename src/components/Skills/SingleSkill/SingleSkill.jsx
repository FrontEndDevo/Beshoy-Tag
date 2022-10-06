import classes from "./SingleSkill.module.scss";

const SingleSkill = (props) => {
  return (
    <li className={classes["tech-box"]}>
      <img src={props.icon} alt={`${props.title}-icon`} />
      <span>{props.title}</span>
    </li>
  );
};

export default SingleSkill;
