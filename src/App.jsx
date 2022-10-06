import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route, Redirect } from "react-router-dom";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";

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
      <Route path="/Beshoy-Tag/skills">
        <Skills />
      </Route>
      <Route path="/Beshoy-Tag/portfolio">
        <Portfolio />
      </Route>
    </div>
  );
};

export default App;
