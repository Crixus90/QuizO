import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Leaderboard({ handleLogout, user }) {
  return (
    <div>
      <Navbar handleLogout={handleLogout} user={user} />
    </div>
  );
}

export default Leaderboard;