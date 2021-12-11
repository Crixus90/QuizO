import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Profile.css";
import { remove } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

function Profile({ handleLogout, user }) {
  let navigate = useNavigate();

  const { dieMotherfuckerDie } = useUser();

  function deleteAccount() {
    remove(user).then((serverResponse) => {
      dieMotherfuckerDie();
      navigate("/auth/login");
      // if(serverResponse.status == false){
      // }
    });
  }

  return (
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <div className="container-profile">
        <section className="profile-section">
          <h1>Username: {user.username}</h1>
          <h1>Country: {user.country}</h1>
          <h1>Score: {user.score}</h1>
          <button
            className="button__submit"
            type="submit"
            onClick={deleteAccount}
          >
            Delete my account
          </button>
        </section>
      </div>
    </>
  );
}

export default Profile;
