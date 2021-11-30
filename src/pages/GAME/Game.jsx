import React from "react";
import Question from "../../components/QUESTIONS/Question";
import "./Game.css";
import JsQuestion from "../../questionsJson/JSQuestions.json";

// take the new array
function Game() {
  return (
    <div>
      {JsQuestion.questions.map((q) => {
        return <Question question={q.question} answerA={q.answers[0].a} />;
      })}
    </div>
  );
}

export default Game;
