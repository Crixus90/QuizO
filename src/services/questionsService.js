import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";

// creates a basic url for every request in this file
const questionsServices = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/questions`,
});

export function getQuestions(category) {
  return questionsServices.get(`?category=${category}`).then((allQuestions) => {
    return allQuestions;
  });
}

export function createQuestions({
  category,
  question,
  answerA,
  answerB,
  answerC,
  answerD,
}) {
  return questionsServices
    .post(
      "/",
      {
        category,
        question,
        answerA,
        answerB,
        answerC,
        answerD,
      },
      {
        headers: {
          Authorization: USER_HELPERS.getUserToken(),
        },
      }
    )

    .then((res) => {
      return {
        status: true,
      };
    })
    .catch((err) => {
      if (err?.response?.data) {
        return {
          status: false,
          errorMessage: err.response.data.errorMessage,
        };
      } else {
        return {
          status: false,
          errorMessage: "there is an issue",
        };
      }
    });
}
