import React, { createContext, useContext, useEffect, useState } from "react";
import { getLoggedIn, logout } from "../services/auth";
import * as USER_HELPERS from "../utils/userToken";

export const UserContext = createContext();

export default function GlobalUserData({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  function dieMotherfuckerDie() {
    setUser(null);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        authenticate,
        handleLogout,
        isLoading,
        dieMotherfuckerDie,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
