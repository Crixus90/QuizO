import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import { useUser } from "./Context/UserContext";

export default function App() {
  const { isLoading, user, authenticate, handleLogout } = useUser();
  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Routes>
        {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}
