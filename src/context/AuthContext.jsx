import axios from "axios";
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
  const [alertMessage, setAlertMessage] = useState({ type: "", message: "" });
  const navigate = useNavigate();

  function login(email, password) {
    axios
      .post("https://energywiseback.azurewebsites.net/user/login", {
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
      .post("https://energywiseback.azurewebsites.net/user", {
        name,
        surname,
        email,
        password,
      })
      .then(() => {
        setAlertMessage({
          type: "success",
          message: "Registro exitoso. Redirigiendo al inicio de sesión...",
        });

        // Después de 3 segundos, redirige al usuario al inicio de sesión y limpia el mensaje
        setTimeout(() => {
          setAlertMessage("");
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        setAlertMessage(errors[err.response.status]);
      });
  }

  function logout() {
    setUser(null);
    sessionStorage.removeItem("authToken");
  }

  function updateUser(userData) {
    axios
      .patch(`https://energywiseback.azurewebsites.net/user/update`, userData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        setAlertMessage(errors[err.response.status]);
      });
  }

  function deleteUser() {
    axios
      .patch(
        "https://energywiseback.azurewebsites.net/user/delete",
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      )
      .then(() => {
        setUser(null);
        sessionStorage.removeItem("authToken");
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
    deleteUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {alertMessage.message && (
        <Alert severity={alertMessage.type} sx={{ mb: 2 }}>
          {alertMessage.message}
        </Alert>
      )}
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
