import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import { DarkModeContextProvider } from "./store/darkMode-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DarkModeContextProvider>
);
