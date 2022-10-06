import styles from "./Project.module.scss";

const Project = (props) => {
  return (
    <li  className={styles.project}>
      <img src={props.icon} alt={props.title} />
      <span>{props.title}</span>
      <p>{props.description}</p>
    </li>
  );
};

export default Project;
