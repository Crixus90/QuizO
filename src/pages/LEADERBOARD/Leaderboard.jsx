import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Leaderboard({ handleLogout, user }) {
  return (
    <div>
      <Navbar handleLogout={handleLogout} user={user} />
      <h1>test</h1>
    </div>
  );
}

export default Leaderboard;
