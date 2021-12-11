import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
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
  const [gameLoading, setGameLoading] = useState(null);

  const currentQuestion = category && questions?.[questionNumber];

  const resetGame = useCallback(() => {
    setCategory("");
    setQuestionNumber(0);
  }, []);

  useEffect(() => {
    if (!category) {
      return;
    }
    setGameLoading(true);

    //get questions
    getQuestions(category).then((allQuestions) => {
      setQuestions(allQuestions.data.questions);
      setGameLoading(false);
    });
  }, [category]);

  //! track if the user has clicked with state.
  function changeQuestion(success = false) {
    setTimeout(() => {
      setQuestionNumber(questionNumber + 1);
    }, 1);

    if (success) {
      //!addPoints etc.
      setPoints(points + 1);
    }
  }

  function decideCategory(newCategory) {
    setCategory(newCategory);
    setGameLoading(true);
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
        gameLoading,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
