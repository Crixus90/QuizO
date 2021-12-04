import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";

// creates a basic url for every request in this file
const questionsServices = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/questions`,
});

export function createQuestions({ answerA }) {
  return questionsServices
    .post("/", {
      headers: {
        Authorization: USER_HELPERS.getUserToken(),
        data: answerA,
      },
    })
    .then((res) => {
      return {
        status: true,
        data: res.data,
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
