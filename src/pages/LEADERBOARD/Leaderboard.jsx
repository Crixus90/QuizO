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
      <div className="test">
        {users.map((user) => {
          return (
            // <table key={user._id}>
            //   <tbody>
            //     <tr>
            //       <th>{user.country}</th>
            //       <th>{user.name}</th>
            //       <th>{user.score}</th>
            //     </tr>
            //   </tbody>
            // </table>
            <table key={user._id} className="table-main">
              <tbody className="test">
                <tr>
                  <th className="th">{user.country}</th>
                  <td className="th">{user.username}</td>
                  <td className="th">{user.score}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
}

export default Leaderboard;
