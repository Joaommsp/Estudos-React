import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  return <UserContext value={{username: "João"}}>{children}</UserContext>;
};

export default UserContextProvider;
