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
    <>
      <Navbar handleLogout={handleLogout} user={user} />
      <table className="content-table first-table">
        <thead>
          <tr className="table-rows">
            <th>Country</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
      </table>
      {users.map((user) => {
        return (
          <table key={user._id} className="content-table">
            <thead>
              <tr className="table-rows">
                <th>{user.country}</th>
                <th>{user.username}</th>
                <th>{user.score}</th>
              </tr>
            </thead>
          </table>
        );
      })}
    </>
  );
}

export default Leaderboard;
