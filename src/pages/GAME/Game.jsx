import React from "react";
import { Navigate } from "react-router-dom";
import Question from "../../components/QUESTIONS/Question";
import "./Game.css";
import * as PATHS from "../../utils/paths";
import { useGame } from "../../Context/GameContext";

function Game() {
  const { currentQuestion } = useGame();

  // const currentQuestion = JsQuestion.js[questionNumber];
  if (!currentQuestion) {
    return <Navigate to={PATHS.LANDINGPAGE} replace />;
  }

  return (
    <div>
      <Question {...currentQuestion} />
    </div>
  );
}

export default Game;
