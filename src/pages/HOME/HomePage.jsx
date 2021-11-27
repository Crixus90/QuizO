import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";

function HomePage({ user, handleLogout }) {
  return (
    <>
      <h1>You're here</h1>
      <Navbar user={user} handleLogout={handleLogout} />
    </>
  );
}

export default HomePage;
