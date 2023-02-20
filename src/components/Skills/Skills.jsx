import SingleSkill from "./SingleSkill/SingleSkill";
import classes from "./Skills.module.scss";
import html5 from "../../assets/technologies/html5.svg";
import css3 from "../../assets/technologies/css3.svg";
import bootsrap5 from "../../assets/technologies/bootstrap5.svg";
import tailwindcss from "../../assets/technologies/tailwindcss.svg";
import sass from "../../assets/technologies/sass.svg";
import javascript from "../../assets/technologies/javascript.svg";
import typescript from "../../assets/technologies/typescript.svg";
import react from "../../assets/technologies/react.svg";
import redux from "../../assets/technologies/redux.svg";
import next from "../../assets/technologies/nextjs.svg";
import git from "../../assets/technologies/git.svg";
import github from "../../assets/technologies/github.svg";

// names of technologies
const MAIN_TITLES = [
  "HTML5",
  "CSS3",
  "Bootstrap5",
  "TailwindCSS",
  "SASS",
  "Javascript",
  "Typescript",
  "Reactjs",
  "Redux",
  "Nextjs",
  "Git",
  "Github",
];

// icons of technologies
const MAIN_TECHNOLOGIES = [
  html5,
  css3,
  bootsrap5,
  tailwindcss,
  sass,
  javascript,
  typescript,
  react,
  redux,
  next,
  git,
  github,
];

const Skills = () => {
  // map on icons & titles arrays
  const mainSkills = MAIN_TECHNOLOGIES.map((skill, index) => (
    <SingleSkill key={index} icon={skill} title={MAIN_TITLES[index]} />
  ));

  return (
    <div className={classes.skills}>
      <div className={classes.content}>
        <div className={classes.title}>
          <span>&lt;&gt;</span>
          <h2>Technical Skills</h2>
          <span>&lt;/&gt;</span>
        </div>
        <div className={classes["skills-description"]}>
          <p>
            I like to mention that these are not all the skills I have or know,
            but they are the skills that I use a lot & able to use comfortably.
          </p>
          <p>
            For example, my knowledge of SASS does not mean that I do not know
            SCSS, when I say that I know JavaScript, it does not mean that I do
            not know ES6 & ES7, and with React, it means that I know (not master
            yet) everything that is used in React.
          </p>
          <p>
            These are the primary skills I have. Also, of course, I have some
            skills that are not important to be mentioned, such as the ability
            to work under pressure, work within a team, and a love of learning
            and curiosity.
          </p>
        </div>
      </div>
      <ul className={classes.technologies}>{mainSkills}</ul>
    </div>
  );
};

export default Skills;
