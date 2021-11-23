import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import LogIn from "../LogIn";

function HomePage({ handleLogout, user }) {
  return (
    <div className="App">
      <LogIn />
    </div>
  );
}

export default HomePage;
