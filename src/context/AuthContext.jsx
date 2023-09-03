import axios from "axios";
import { createContext, useState, useContext } from "react";
import Alert from "@mui/material/Alert";
import { errors } from "../const/errors";

const AuthContext = createContext({
  user: null,
  setUser: () => {},

  login: () => {},
  logout: () => {},
  register: () => {},
  updateUser: () => {},
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(sessionStorage.getItem("authToken") ?? null);
  const [alertMessage, setAlertMessage] = useState("");

  function login(email, password) {
    axios
      .post("http://localhost:3000/user/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data) {
          setUser(response.data);
          sessionStorage.setItem("authToken", response.data.token);
          setAlertMessage("");
        }
      })
      .catch((err) => {
        setAlertMessage(errors[err.response.status]);
      });
  }

  function register(name, surname, email, password) {
    axios
      .post("http://localhost:3000/user", {
        name,
        surname,
        email,
        password,
      })
      .then((response) => {
        setUser(response.data);
        setAlertMessage("");
      })
      .catch((err) => {
        setAlertMessage(errors[err.response.status]);
      });
  }

  function logout() {
    setUser(null);
    sessionStorage.removeItem("authToken");
  }

  function updateUser(userId, userData) {
    axios
      .patch(`http://localhost:3000/user/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => {
        setAlertMessage(errors[err.response.status]);
      });
  }

  const value = {
    user,
    setUser,
    login,
    register,
    logout,
    updateUser,
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
