import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router";
import { getQuestions } from "../services/questionsService";
import { addPoints } from "../services/auth";
import { useUser } from "../Context/UserContext";

const GameContext = createContext();

export function useGame() {
  return useContext(GameContext);
}

export default function GameWrapper({ children }) {
  const { user } = useUser();
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
    setPoints(0);
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
    if (success) {
      //!addPoints etc.
      // console.log("points before", points);
      setPoints(points + 10);

      addPoints({ user, points });
    }
    setQuestionNumber(questionNumber + 1);
  }
  console.log("these are the points", points);

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
