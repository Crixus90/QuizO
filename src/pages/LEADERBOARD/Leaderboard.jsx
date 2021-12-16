import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getUsers } from "../../services/leaderboard";
import "./Leaderboard.css";

function Leaderboard({ handleLogout, user }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((allUsers) => {
      // console.log(allUsers);
      if (!allUsers.status) {
        return;
      }
      setUsers(allUsers.data);
    });
  }, []);

  return (
    <div>
      <Navbar handleLogout={handleLogout} user={user} />
      <div className="leaderboard-container">
        <table className="leaderboards">
          <tr>
            <th>Country</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.country}</td>
                <td>{user.username}</td>
                <td>{user.score}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
