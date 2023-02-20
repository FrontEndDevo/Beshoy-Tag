import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route, Redirect } from "react-router-dom";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import foodOrder from "../src/assets/projects/food-order.png";
import flyingNotes from "../src/assets/projects/flying-notes.png";
import weBuild from "../src/assets/projects/webuild.png";
import typingSpeedTest from "../src/assets/projects/typing-speed-test.png";
import todoList from "../src/assets/projects/todo-list.png";
import boundi from "../src/assets/projects/boundi.png";
import oliver from "../src/assets/projects/oliver.png";

// Add new project from here:
const MAIN_PROJECTS = [
  {
    id: "p1",
    img: foodOrder,
    title: "Food Order",
    description:
      "Now you can order healthy food from the most famous restaurants in the world.",
    technologies: "Reactjs & SASS",
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
    img: weBuild,
    title: "WEBUILD",
    description:
      "Want to build your own building? Afraid of rising resource prices? Urgent and want to finish as soon as possible? You will find all the solutions to your problems with us.",
    technologies: "Reactjs & TailwindCSS",
    github: "https://github.com/FrontEndDevo/webuild",
    preview: "frontenddevo.github.io/webuild/",
  },
  {
    id: "p4",
    img: typingSpeedTest,
    title: "Typing Speed Test",
    description:
      "Do you think you are fast at typing? Let's play this game together and find out how fast you are.",
    technologies: "HTML & SASS & JS",
    github: "https://github.com/FrontEndDevo/Typing-Speed-Test",
    preview: "https://frontenddevo.github.io/Typing-Speed-Test/",
  },
  {
    id: "p5",
    img: todoList,
    title: "Todo List",
    description:
      "Boundi is an SPA website that introduces a company and its staff and what they do with all their services",
    technologies: "HTML & CSS & Bootstrap",
    github: "https://github.com/FrontEndDevo/Bondi-Bootstrap",
    preview: "https://frontenddevo.github.io/Bondi-Bootstrap/",
  },
  {
    id: "p6",
    img: boundi,
    title: "Boundi",
    description:
      "Todo list is a simple, easy-to-use, and clean way to stay on top of your to-do list and improve your productivity.",
    technologies: "HTML & CSS & Bootstrap & JavaScript",
    github: "https://github.com/FrontEndDevo/Todo-List",
    preview: "https://frontenddevo.github.io/Todo-List/",
  },
  {
    id: "p7",
    img: oliver,
    title: "Oliver",
    description:
      "This integrated website describes the Oliver team, who introduce themselves through their personal website, show their work, plans, services, and price plans, and introduce you to the team members and their skills, in addition to the most important upcoming events and how to communicate with them.",
    technologies: "HTML & CSS",
    github: "https://github.com/FrontEndDevo/Template-Oliver",
    preview: "https://frontenddevo.github.io/Template-Oliver/",
  },
];

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Route path="/">
        <Redirect to="/Beshoy-Tag/home" />
      </Route>
      <Route path="/Beshoy-Tag/home">
        <Home />
      </Route>
      <Route path="/Beshoy-Tag/about">
        <About />
      </Route>
      <Route path="/Beshoy-Tag/portfolio">
        <Portfolio allProjects={MAIN_PROJECTS} />
      </Route>
      <Route path="/Beshoy-Tag/skills">
        <Skills />
      </Route>
    </div>
  );
};

export default App;
