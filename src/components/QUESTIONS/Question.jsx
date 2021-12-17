import React, { useMemo } from "react";
import { useGame } from "../../Context/GameContext";
import "./Questions.css";

function Question(props) {
  const { changeQuestion, questionNumber } = useGame();

  const listOfAnswers = Object.entries(props.answer);

  const listSorted = useMemo(() => {
    return listOfAnswers
      .sort(() => Math.random() - 0.5)
      .map(([key, answer]) => {
        function provideAnswer() {
          changeQuestion(answer.iscorrect);
        }
        return (
          <div key={key} onClick={provideAnswer} className="answer">
            <p>{answer.value}</p>
          </div>
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionNumber]);

  return (
    <div className="question-container">
      <h2 className="question">{props.question}</h2>
      <div className="answers-container">{listSorted}</div>
    </div>
  );
}

export default Question;
