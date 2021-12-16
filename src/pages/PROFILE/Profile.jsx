import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Profile.css";
import { remove } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import { useEffect } from "react/cjs/react.development";

function Profile({ handleLogout, user }) {
  let navigate = useNavigate();

  const { removeUser, fetchUserData } = useUser();

  function deleteAccount() {
    remove(user).then((serverResponse) => {
      removeUser();
      navigate("/auth/login");
      // if(serverResponse.status == false){
      // }
    });
  }

  //! not finished
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <div className="container-profile">
        <section className="profile-section">
          {console.log(user)}
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
