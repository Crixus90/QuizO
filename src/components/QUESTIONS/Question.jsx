import React from "react";

function Question(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.question}</h2>
      <div className="answers-container">
        <h3>{props.answerA}</h3>
        <h3>{props.answerB}</h3>
        <h3>{props.answerC}</h3>
        <h3>{props.answerD}</h3>
      </div>
    </div>
  );
}

export default Question;
