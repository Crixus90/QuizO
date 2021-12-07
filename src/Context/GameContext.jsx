import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AllQuestions from "../questionsJson/JSQuestions.json";
import { getQuestions } from "../services/questionsService";

const GameContext = createContext();

export function useGame() {
  return useContext(GameContext);
}

export default function GameWrapper({ children }) {
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  console.log(category);
  const [points, setPoints] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);

  const currentQuestion = category && AllQuestions[category][questionNumber];
  console.log(currentQuestion);

  useEffect(() => {
    if (questionNumber && !currentQuestion) {
      setQuestionNumber(0);
    }
  }, [currentQuestion, questionNumber]);

  useEffect(() => {
    getQuestions().then((questions) => {
      console.log(questions);
    });
    return () => {};
  });

  //! track if the user has clicked with state.
  function changeQuestion(success = false) {
    setTimeout(() => {
      console.log("Hello World!");
      setQuestionNumber(questionNumber + 1);
    }, 1);

    if (success) {
      //!addPoints etc.
      setPoints(points + 1);
    }
  }

  function decideCategory(newCategory) {
    setCategory(newCategory);
    //  setQuestionNumber(0)
    navigate("/game");
  }

  return (
    <GameContext.Provider
      value={{
        category,
        points,
        questionNumber,
        changeQuestion,
        decideCategory,
        currentQuestion,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
