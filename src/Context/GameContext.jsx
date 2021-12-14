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
  const [hasClicked, setHasClicked] = useState(false);
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
    setHasClicked(true);
    if (hasClicked) {
      setTimeout(() => {
        if (success) {
          //!addPoints etc.
          // console.log("points before", points);

          // EXAMPLE, NOT NECESSARILY A REAL VALUE
          // POINTS HERE ARE 110
          const newPoints = points + 10;
          setPoints(newPoints);
          // WHAT IS THE VALUE OF POINTS HERE -> 110

          addPoints({ user, points: newPoints }).then(() => {
            console.log(`Horray!`);
          });
        }
        setQuestionNumber(questionNumber + 1);
        setHasClicked(false);
      }, 2000);
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
