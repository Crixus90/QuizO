import React from "react";
import { Navigate } from "react-router-dom";
import Question from "../../components/QUESTIONS/Question";
import "./Game.css";
import * as PATHS from "../../utils/paths";
import { useGame } from "../../Context/GameContext";
import LoadingComponent from "../../components/Loading";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";

function Game() {
  const { currentQuestion, gameLoading, stopLoading, resetGame } = useGame();

  useEffect(() => {
    // when the compoent gets added to the VIRTUAL DOM - tell it to stopLoading
    stopLoading();

    return () => {
      // whenever the game component is about to leave the virtugal dom, call this function
      resetGame();
    };
  }, [stopLoading, resetGame]);

  if (gameLoading) {
    return <LoadingComponent />;
  }
  // const currentQuestion = JsQuestion.js[questionNumber];
  if (!currentQuestion) {
    return <Navigate to={PATHS.LANDINGPAGE} replace />;
  }

  return (
    <div>
      <Navbar />
      <Question {...currentQuestion} />
    </div>
  );
}

export default Game;
