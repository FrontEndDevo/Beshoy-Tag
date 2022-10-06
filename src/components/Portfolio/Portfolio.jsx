import classes from "./Portfolio.module.scss";
import foodOrder from "../../assets/projects/food-order.png";
import Project from "./Project/Project";

const MAIN_PROJECTS = [
  {
    id: "p1",
    icon: foodOrder,
    title: "Food Order",
    description:
      "Now you can order healthy food from the most famous restaurants in the world.",
    technologies: "Reactjs / SASS",
    github: "https://github.com/FrontEndDevo/React-App-Food-Delivery",
    preview: "https://food-delivery-b0655.web.app",
  },
];

const Portfolio = () => {
  const allProjects = MAIN_PROJECTS.map((project) => (
    <Project
      key={project.id}
      icon={project.icon}
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
