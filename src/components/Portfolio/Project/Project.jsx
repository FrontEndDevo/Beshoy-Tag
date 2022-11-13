import styles from "./Project.module.scss";
import github from "../../../assets/portfolio_images/github.png";
import preview from "../../../assets/portfolio_images/eye.png";

const Project = (props) => {
  const blank = "_blank";

  const githubLinkHandler = () => {
    window.open(props.github, blank);
  };

  const previewLinkHandler = () => {
    window.open(props.preview, blank);
  };

  return (
    <li className={styles.project}>
      <img src={props.img} alt={props.title} />
      <span>{props.title}</span>
      <p>{props.description}</p>
      <h6>{props.technologies}</h6>
      <div className={styles.buttons}>
        <button onClick={githubLinkHandler}>
          <img src={github} alt="project github icon" />
        </button>
        <button onClick={previewLinkHandler}>
          <img src={preview} alt="project view icon" />
        </button>
      </div>
    </li>
  );
};

export default Project;
