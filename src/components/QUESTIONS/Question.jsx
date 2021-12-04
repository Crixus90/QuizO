import React from "react";
import { useGame } from "../../Context/GameContext";

function Question(props) {
  console.log(props);
  const { changeQuestion } = useGame();
  const listOfAnswers = Object.entries(props.answer);

  console.log(listOfAnswers);
  return (
    <div>
      <h2>{props.question}</h2>
      <div className="answers-container">
        {listOfAnswers.map(([key, answer]) => {
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
