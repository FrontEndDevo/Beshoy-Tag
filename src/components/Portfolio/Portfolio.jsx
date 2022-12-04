import classes from "./Portfolio.module.scss";
import Project from "./Project/Project";


const Portfolio = (props) => {
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
    <section className={classes.portfolio}>
      <div className={classes.content}>
        <h4>Recent Projects</h4>
        <ul className={classes["all-projects"]}>{allProjects}</ul>
      </div>
    </section>
  );
};

export default Portfolio;
