import classes from "./Skills.module.scss";
import gmail from "../../assets/icons/gmail.png";

const MAIN_SKILLS = [
  "HTML5",
  "CSS3",
  "Bootstrap5",
  "SASS",
  "Git & Github",
  "Javascript",
  "Reactjs",
];

const Skills = () => {
  return (
    <div className={classes.skills}>
      <div className={classes.content}>
        <div className={classes.title}>
          <span>&lt;&gt;</span>
          <h2>Technical Skills</h2>
          <span>&lt;/&gt;</span>
        </div>
        <div className={classes['skills-description']}>
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
      <div className={classes.technologies}>
        <div className={classes["tech-box"]}>
          <img src={gmail} alt="" />
          <span>Javascript</span>
        </div>
        <div className={classes["tech-box"]}>
          <img src={gmail} alt="" />
          <span>Javascript</span>
        </div>
        <div className={classes["tech-box"]}>
          <img src={gmail} alt="" />
          <span>Javascript</span>
        </div>
        <div className={classes["tech-box"]}>
          <img src={gmail} alt="" />
          <span>Javascript</span>
        </div>
        <div className={classes["tech-box"]}>
          <img src={gmail} alt="" />
          <span>Javascript</span>
        </div>
        <div className={classes["tech-box"]}>
          <img src={gmail} alt="" />
          <span>Javascript</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
