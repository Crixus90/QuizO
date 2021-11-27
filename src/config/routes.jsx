import { Navigate } from "react-router-dom";
import HomePage from "../pages/HOME/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import Profile from "../pages/PROFILE/Profile";
import * as PATHS from "../utils/paths";

const routes = (props) => {
  console.log(props);
  //tcvbcfbh
  const { user } = props;
  return [
    {
      path: PATHS.LANDINGPAGE,
      element: user ? (
        <HomePage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
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
  ];
};

export default routes;
