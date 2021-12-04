import React, { useState } from "react";
// import * as PATHS from "../utils/paths";
// import { useNavigate, Link } from "react-router-dom";
import "./Addquestions.css";
import { createQuestions } from "../../services/questionsService";

function Addquestions() {
  const [form, setForm] = useState({
    category: "",
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
  });

  const { category, question, answerA, answerB, answerC, answerD } = form;
  const [error, setError] = useState(null);

  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    console.log("hisasda");
    event.preventDefault();
    const questionAndAnswer = {
      category,
      question,
      answerA,
      answerB,
      answerC,
      answerD,
    };
    createQuestions(questionAndAnswer).then((res) => {
      return {
        category,
        question,
        answerA,
        answerB,
        answerC,
        answerD,
      };
    });
  }

  return (
    <>
      <form className="signup__form" onSubmit={handleFormSubmission}>
        <label htmlFor="input-question">Question</label>
        <input
          id="input-username"
          type="text"
          name="question"
          value={question}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-answer">Correct answer:</label>
        <div className="input-questions">
          <input
            id="input-username"
            type="text"
            name="answerA"
            value={answerA}
            onChange={handleInputChange}
            required
          />
        </div>

        <label htmlFor="input-answer">Answer B:</label>
        <div className="input-questions">
          <input
            id="input-username"
            type="text"
            name="answerB"
            value={answerB}
            onChange={handleInputChange}
            required
          />
        </div>

        <label htmlFor="input-answer">Answer C:</label>
        <div className="input-questions">
          <input
            id="input-username"
            type="text"
            name="answerC"
            value={answerC}
            onChange={handleInputChange}
            required
          />
        </div>

        <label htmlFor="input-answer">Answer D:</label>
        <div className="input-questions">
          <input
            id="input-username"
            type="text"
            name="answerD"
            value={answerD}
            onChange={handleInputChange}
            required
          />
        </div>

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

        <button className="button__submit" type="submit">
          Submit
          {/* {useNavigate(PATHS.QUESTIONSPAGE)} */}
        </button>
      </form>
    </>
  );
}

export default Addquestions;
