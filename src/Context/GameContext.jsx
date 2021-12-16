import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { useNavigate } from "react-router";
import { useUser } from "../Context/UserContext";
import { addPoints } from "../services/auth";
import { getQuestions } from "../services/questionsService";

const GameContext = createContext();

export function useGame() {
  return useContext(GameContext);
}

const initialState = {
  category: null,
  questions: null,
  points: 0,
  questionNumber: 0,
  gameLoading: false,
};

// {type: "STRING"}
// .on("click") // on("mouseover") // .on("input")
function reducer(state = initialState, action) {
  switch (action.type) {
    case "RESET": {
      return {
        ...state,
        category: "",
        questionNumber: 0,
        points: 0,
      };
    }
    case "START_LOADING": {
      return {
        ...state,
        gameLoading: true,
      };
    }
    case "ADD_QUESTIONS": {
      // {type: "ADD_QUESTIONS", questions: array_of_questions}
      return {
        ...state,
        questions: action.questions,
        gameLoading: false,
      };
    }
    case "DEFINE_CAT": {
      //{type:"DEFINE_CAT", category: category_value_being_passed}
      return {
        ...state,
        category: action.category,
        gameLoading: true,
      };
    }
    case "CHANGE_QUESTION": {
      // {type: "CHANGE_QUESTION", (optional): points: value}
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
        points: action.points ?? state.points,
      };
    }

    case "STOP_LOADING": {
      return {
        ...state,
        gameLoading: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default function GameWrapper({ children }) {
  const { user } = useUser();
  const navigate = useNavigate();
  const [gameState, dispatch] = useReducer(reducer, initialState);
  const clicked = useRef();

  // console.log(gameState);

  const stopLoading = useCallback(() => {
    dispatch({ type: "STOP_LOADING" });
  }, []);

  const currentQuestion =
    gameState.category && gameState.questions?.[gameState.questionNumber];

  const resetGame = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  useEffect(() => {
    if (!gameState.category) {
      return;
    }
    dispatch({ type: "START_LOADING" });

    //get questions
    getQuestions(gameState.category).then((allQuestions) => {
      dispatch({
        type: "ADD_QUESTIONS",
        questions: allQuestions.data.questions,
      });
    });
  }, [gameState.category]);

  //! track if the user has clicked with state.
  const changeQuestion = useCallback(
    async (success = false) => {
      if (clicked.current) {
        return;
      }

      clicked.current = true;
      await waitSomeTime();

      let points = gameState.points;

      if (success) {
        points += 5;

        await addPoints({ user, points });
      }

      clicked.current = false;

      dispatch({ type: "CHANGE_QUESTION", points });
    },
    [gameState.points, user]
  );
  console.log(gameState);
  // async function changeQuestion(success = false) {
  //   console.log("TRYING TO CLICK", hasClicked);
  //   if (hasClicked) {
  //     return;
  //   }

  //   setHasClicked(true);
  //   if (success) {
  //     //!addPoints etc.

  //     const newPoints = points + 5;
  //     setPoints(newPoints);

  //     await addPoints({ user, points: newPoints });
  //   }
  //   await waitSomeTime();
  //   changeQuestionNumber();
  // }

  //  console.log(hasClicked);

  const decideCategory = useCallback(
    (newCategory) => {
      dispatch({ type: "DEFINE_CAT", category: newCategory });
      navigate("/game");
    },
    [navigate]
  );

  return (
    <GameContext.Provider
      value={{
        ...gameState,
        changeQuestion,
        decideCategory,
        currentQuestion,
        stopLoading,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function waitSomeTime(time = 2000) {
  return new Promise((r) => setTimeout(r, time));
}
