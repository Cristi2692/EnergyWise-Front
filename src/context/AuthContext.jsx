import { createContext, useState, useContext } from "react";
import Alert from "@mui/material/Alert";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  function login(username, password) {
    if (username === "cris@mail.com" && password === "123456") {
      setUser(username);
      setAlertMessage("");
    } else {
      setAlertMessage("Usuario incorrecto, vuelve a intentarlo.");
    }
  }

  function logout() {}

  const value = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {alertMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {alertMessage}
        </Alert>
      )}
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
