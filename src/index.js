import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalUserData from "./Context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalUserData>
        <App />
      </GlobalUserData>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
