import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";

const Navbar = (props) => {
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

        {props.user ? (
          <>
            <Link to={PATHS.PROFILE} className="authLink">
              Profile
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
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
