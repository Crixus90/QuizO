import { Navigate } from "react-router-dom";
import HomePage from "../pages/HOME/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import Profile from "../pages/PROFILE/Profile";
import * as PATHS from "../utils/paths";
import Game from "../pages/GAME/Game";
import Addquestions from "../pages/ADDQUESTIONS/Addquestions";
import Leaderboard from "../pages/LEADERBOARD/Leaderboard";

const routes = (props) => {
  //tcvbcfbh
  const { user } = props;
  return [
    {
      path: PATHS.LANDINGPAGE,
      element: user ? <HomePage /> : <Navigate to={PATHS.LOGINPAGE} replace />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: !user ? (
        <Signup {...props} />
      ) : (
        <Navigate to={PATHS.LANDINGPAGE} replace />
      ),
    },

    {
      path: PATHS.LOGINPAGE,
      element: !user ? (
        <Login {...props} />
      ) : (
        <Navigate to={PATHS.LANDINGPAGE} replace />
      ),
    },
    {
      path: PATHS.PROFILE,
      element: user ? (
        <Profile {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.GAMEPAGE,
      element: user ? <Game /> : <Navigate to={PATHS.LOGINPAGE} replace />,
    },
    {
      path: PATHS.QUESTIONSPAGE,
      element: !user ? (
        <Login {...props} />
      ) : (
        <Addquestions to={PATHS.QUESTIONSPAGE} replace />
      ),
    },

    {
      path: PATHS.LEADERBOARDS,
      element: !user ? (
        <Login {...props} />
      ) : (
        <Leaderboard to={PATHS.LEADERBOARDS} replace />
      ),
    },
  ];
};

export default routes;
