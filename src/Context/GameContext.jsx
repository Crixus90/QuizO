import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getQuestions } from "../services/questionsService";

const GameContext = createContext();

export function useGame() {
  return useContext(GameContext);
}

export default function GameWrapper({ children }) {
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [points, setPoints] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);

  const currentQuestion = category && questions?.[category]?.[questionNumber];

  useEffect(() => {
    if (questionNumber != null && !currentQuestion && category) {
      setQuestionNumber(0);
      setCategory("");
    }
    if (!category) {
      return;
    }

    //get questions
    getQuestions(category).then((questions) => {
      setQuestions(questions);
      console.log("these are the qs" + questions);
    });
    return () => {};
  }, [currentQuestion, questionNumber, category]);

  console.log(category);
  console.log(currentQuestion);
  console.log(questionNumber);

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
