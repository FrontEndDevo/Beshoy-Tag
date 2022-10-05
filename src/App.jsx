import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route, Redirect } from "react-router-dom";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Route path="/">
        <Redirect to="home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
    </div>
  );
};

export default App;
