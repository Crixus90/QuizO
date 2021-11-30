import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import { useUser } from "../../Context/UserContext";

const Navbar = () => {
  const { user, handleLogout } = useUser();
  return (
    <nav>
      <div className="nav__authLinks">
        <Link to={PATHS.LANDINGPAGE} className="nav__projectName">
          Home
        </Link>
        <Link to={PATHS.LANDINGPAGE} className="nav__projectName">
          Leaderboards
        </Link>
        <Link to={PATHS.LANDINGPAGE} className="nav__logo">
          QuizO
        </Link>

        {user ? (
          <>
            <Link to={PATHS.PROFILE} className="authLink">
              Profile
            </Link>
            <button className="nav-logoutbtn" onClick={handleLogout}>
              Logout
            </button>
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
