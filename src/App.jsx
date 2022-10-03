import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";


const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home/>
    </Fragment>
  );
};

export default App;
