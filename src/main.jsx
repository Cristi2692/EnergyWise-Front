import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.jsx";
import { ThemeProvider } from "@mui/system";
import { theme } from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
