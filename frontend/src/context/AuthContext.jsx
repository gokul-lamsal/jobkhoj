import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState("jkhjg")


  const login = (user, token) => {
    console.log("Login in ", user, token);

  }
  const logout = () => {
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ user, token,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };