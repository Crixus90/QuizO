import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Profile({ handleLogout, user }) {
  return (
    <div>
      <Navbar handleLogout={handleLogout} user={user} />
      <h1>Username: {user.username}</h1>
      <h1>Country: {user.country}</h1>
      <h1>Score: {user.score}</h1>
    </div>
  );
}

export default Profile;
