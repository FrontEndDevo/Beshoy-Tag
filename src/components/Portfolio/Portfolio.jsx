import classes from "./Portfolio.module.scss";
import Project from "./Project/Project";
import DarkModeContext from "../../store/darkMode-context";
import { useContext } from "react";
const Portfolio = (props) => {
  const darkMode = useContext(DarkModeContext);
  const allProjects = props.allProjects.map((project) => (
    <Project
      key={project.id}
      img={project.img}
      title={project.title}
      description={project.description}
      technologies={project.technologies}
      github={project.github}
      preview={project.preview}
    />
  ));

  return (
    <section
      className={`${classes.portfolio} ${
        darkMode.isDarkModeOn && classes["dark-mode"]
      }`}
    >
      <div className={classes.content}>
        <h4>Recent Projects</h4>
        <ul className={classes["all-projects"]}>{allProjects}</ul>
      </div>
    </section>
  );
};

export default Portfolio;
