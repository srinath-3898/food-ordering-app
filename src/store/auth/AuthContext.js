"use client";
import { createContext } from "react";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthContext;
