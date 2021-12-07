import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import { useUser } from "../../Context/UserContext";

const Navbar = () => {
  const { user, handleLogout } = useUser();
  return (
    <nav>
      <Link to={PATHS.LANDINGPAGE} className="nav__logo">
        QuizO
      </Link>
      <div className="nav__authLinks">
        <Link to={PATHS.LANDINGPAGE} className="nav__projectName">
          Leaderboards
        </Link>
        {user ? (
          <>
            <Link to={PATHS.PROFILE} className="authLink">
              Profile
            </Link>
            <Link
              to={PATHS.LOGINPAGE}
              className="authLink"
              onClick={handleLogout}
            >
              Logout
            </Link>
            {/* <button className="nav-logoutbtn" onClick={handleLogout}>
              Logout
            </button> */}
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
