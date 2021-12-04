import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalUserData from "./Context/UserContext";
import GameWrapper from "./Context/GameContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalUserData>
        <GameWrapper>
          <App />
        </GameWrapper>
      </GlobalUserData>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
