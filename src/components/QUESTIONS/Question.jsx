import React from "react";
import { useGame } from "../../Context/GameContext";

function Question(props) {
  const { changeQuestion } = useGame();
  const listOfAnswers = Object.entries(props.answer);

  return (
    <div>
      <h2>{props.question}</h2>
      <div className="answers-container">
        {listOfAnswers
          .sort(() => Math.random() - 0.5)
          .map(([key, answer]) => {
            function provideAnswer() {
              changeQuestion(answer.isCorrect);
            }
            return (
              <p key={key} onClick={provideAnswer}>
                {answer.value}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default Question;
