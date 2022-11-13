import classes from "./Portfolio.module.scss";
import foodOrder from "../../assets/projects/food-order.png";
import flyingNotes from "../../assets/projects/flying-notes.png";
import typingSpeedTest from "../../assets/projects/Typing-Speed-Test.png";
import Project from "./Project/Project";

const MAIN_PROJECTS = [
  {
    id: "p1",
    img: foodOrder,
    title: "Food Order",
    description:
      "Now you can order healthy food from the most famous restaurants in the world.",
    technologies: "Reactjs / SASS",
    github: "https://github.com/FrontEndDevo/React-App-Food-Delivery",
    preview: "https://food-delivery-b0655.web.app",
  },
  {
    id: "p2",
    img: flyingNotes,
    title: "Flying Notes",
    description:
      "Now you can easily record your notes in an online book, and of course, you can return in anytime to read, write, and edit your own notes.",
    technologies: "Reactjs (Redux toolkit & React Routing) & SASS",
    github: "https://github.com/FrontEndDevo/Flying-Notes",
    preview: "https://frontenddevo.github.io/Flying-Notes/",
  },
  {
    id: "p3",
    img: typingSpeedTest,
    title: "Typing Speed Test",
    description:
      "Do you think you are fast at typing? Let's play this game together and find out how fast you are.",
    technologies: "HTML & SASS & JS",
    github: "https://github.com/FrontEndDevo/Typing-Speed-Test",
    preview: "https://frontenddevo.github.io/Typing-Speed-Test/",
  },
];

const Portfolio = () => {
  const allProjects = MAIN_PROJECTS.map((project) => (
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
