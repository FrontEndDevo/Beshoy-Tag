import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route, Redirect } from "react-router-dom";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import foodOrder from "../src/assets/projects/food-order.png";
import flyingNotes from "../src/assets/projects/flying-notes.png";
import BeautifulNews from "../src/assets/projects/beautiful-news.png";
import EcobazarGrocery from "../src/assets/projects/ecobazar-grocery.png";
import peboo from "./assets/projects/peboo.png";
import weBuild from "../src/assets/projects/webuild.png";
import typingSpeedTest from "../src/assets/projects/Typing-Speed-Test.png";
import todoList from "../src/assets/projects/todo-list.png";
import boundi from "../src/assets/projects/boundi.png";
import oliver from "../src/assets/projects/oliver.png";

// Add new project from here:
const MAIN_PROJECTS = [
  {
    id: Math.random(),
    img: BeautifulNews,
    title: "Beautiful News",
    description:
      "Our site includes all types of news like political, judicial, entertainment, sports and more. We present a continuous flow of links to articles organized from thousands of publishers and magazines.",
    technologies: "Next.js & Redux toolkit & SASS",
    github: "https://github.com/FrontEndDevo/beautiful-news",
    preview: "https://github.com/FrontEndDevo/beautiful-news",
  },
  {
    id: Math.random(),
    img: EcobazarGrocery,
    title: "Ecobazar Grocery",
    description:
      "Organic Food Ecommerce Website, Ecobazar is a React.js application that offers a user-friendly interface, advanced product filtering, and comprehensive e-commerce functionality.",
    technologies: "React.js & React-Router-Dom & Redux toolkit & TailwindCSS",
    github: "https://github.com/FrontEndDevo/ecobazar-grocery",
    preview: "https://github.com/FrontEndDevo/ecobazar-grocery",
  },
  {
    id: Math.random(),
    img: flyingNotes,
    title: "Flying Notes",
    description:
      "Now you can easily record your notes in an online book, and of course, you can return in anytime to read, write, and edit your own notes.",
    technologies: "React.js & React-Router-Dom & Redux toolkit & SASS",
    github: "https://github.com/FrontEndDevo/Flying-Notes",
    preview: "https://frontenddevo.github.io/Flying-Notes/",
  },
  {
    id: Math.random(),
    img: foodOrder,
    title: "Food Order",
    description:
      "Order healthy food from the most famous restaurants in the world, you can simply see our latest meals and choose what you want, the food will be prepared for you and delivered to you as soon as possible to enjoy a delicious and cheap",
    technologies: "React.js & SASS",
    github: "https://github.com/FrontEndDevo/React-App-Food-Delivery",
    preview: "https://food-delivery-b0655.web.app",
  },
  {
    id: Math.random(),
    img: peboo,
    title: "Peboo",
    description:
      "Peboo is a modern and responsive landing page template designed for business consultancies. Built using React.js, Peboo offers a sleek and professional design that helps showcase your consultancy services effectively.",
    technologies: "React.js & TailwindCSS",
    github: "https://github.com/FrontEndDevo/peboo",
    preview: "https://frontenddevo.github.io/peboo/",
  },
  {
    id: Math.random(),
    img: weBuild,
    title: "WEBUILD",
    description:
      "Want to build your own building? Afraid of rising resource prices? Urgent and want to finish as soon as possible? You will find all the solutions to your problems with us.",
    technologies: "React,js & TailwindCSS",
    github: "https://github.com/FrontEndDevo/webuild",
    preview: "https://frontenddevo.github.io/webuild/",
  },
  {
    id: Math.random(),
    img: typingSpeedTest,
    title: "Typing Speed Test",
    description:
      "Do you think you are fast at typing? Let's play this game together and find out how fast you are.",
    technologies: "HTML & SASS & Javascript",
    github: "https://github.com/FrontEndDevo/Typing-Speed-Test",
    preview: "https://frontenddevo.github.io/Typing-Speed-Test/",
  },
  {
    id: Math.random(),
    img: todoList,
    title: "Todo List",
    description:
      "Boundi is an SPA website that introduces a company and its staff and what they do with all their services",
    technologies: "HTML & CSS & Javascript",
    github: "https://github.com/FrontEndDevo/Bondi-Bootstrap",
    preview: "https://frontenddevo.github.io/Todo-List/",
  },
  {
    id: Math.random(),
    img: boundi,
    title: "Boundi",
    description:
      "Todo list is a simple, easy-to-use, and clean way to stay on top of your to-do list and improve your productivity.",
    technologies: "HTML & CSS & Bootstrap",
    github: "https://github.com/FrontEndDevo/Todo-List",
    preview: "https://frontenddevo.github.io/Bondi-Bootstrap/",
  },
  {
    id: Math.random(),
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
