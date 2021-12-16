import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import { useUser } from "../../Context/UserContext";

const Navbar = () => {
  const { handleLogout } = useUser();
  return (
    <header className="nav-container">
      <Link to={PATHS.LANDINGPAGE} className="nav__logo">
        QuizO
      </Link>
      <nav>
        <ul className="nav__authLinks">
          <li>
            <Link to={PATHS.LEADERBOARDS}>Leaderboards</Link>
          </li>
          <li>
            <Link to={PATHS.PROFILE}>Profile</Link>
          </li>
          <li>
            <Link
              to={PATHS.LOGINPAGE}
              onClick={handleLogout}
              className="logout-btn"
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
