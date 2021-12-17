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
    });
  }

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <div className="container-profile">
        {console.log(user)}
        <h1>USERNAME</h1>
        <h2>{user.username}</h2>
        <h1>COUNTRY</h1>
        <h2>{user.country}</h2>
        <h1>SCORE</h1>
        <h2>{user.score}</h2>
        <button
          className="button__submit"
          type="submit"
          onClick={deleteAccount}
        >
          Delete my account
        </button>
      </div>
    </>
  );
}

export default Profile;
