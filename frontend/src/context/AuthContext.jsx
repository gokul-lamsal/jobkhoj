import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState("jkhjg")
  // useEffect(() => {
  //   console.log(import.meta.env.VITE_API_URL);

  // }, [])
  return (
    <AuthContext.Provider value={{ user, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };