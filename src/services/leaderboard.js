import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";

// creates a basic url for every request in this file
const leaderboardServices = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/leaderboard`,
});

export function getUsers() {
  return leaderboardServices
    .get("/", {
      headers: {
        Authorization: USER_HELPERS.getUserToken(),
      },
    })
    .then((res) => {
      return {
        status: true,
        data: res.data.users,
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
