import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Profile({ handleLogout, user }) {
  return (
    <div>
      <Navbar handleLogout={handleLogout} user={user} />
    </div>
  );
}

export default Profile;
