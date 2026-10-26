import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "Jhon",
    role: "seeker"
  })
  const [token, setToken] = useState("")

  return (
    <AuthContext.Provider value={{ user, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };