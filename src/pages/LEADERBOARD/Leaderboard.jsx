import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getUsers } from "../../services/leaderboard";

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
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <div className="test">
        {users.map((user) => {
          return (
            <table key={user._id}>
              <tr>
                <td>{user.username}</td>
                <td>{user.score}</td>
              </tr>
            </table>
          );
        })}
      </div>
    </>
  );
}

export default Leaderboard;
