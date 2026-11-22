import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "Jhon",
    role: "admin"
  })
  const [token, setToken] = useState("jkhjg")

  return (
    <AuthContext.Provider value={{ user, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };