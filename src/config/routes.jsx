import { Navigate } from "react-router-dom";
import HomePage from "../pages/HOME/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import ProtectedPage from "../pages/ProtectedPage";
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
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
