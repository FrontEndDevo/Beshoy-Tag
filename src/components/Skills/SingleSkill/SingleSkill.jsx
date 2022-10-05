import classes from "./SingleSkill.module.scss";

const SingleSkill = (props) => {
  return (
    <div className={classes["tech-box"]}>
      <img src={props.icon} alt={`${props.title}-icon`} />
      <span>{props.title}</span>
    </div>
  );
};

export default SingleSkill;
