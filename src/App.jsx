import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route, Redirect } from "react-router-dom";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
