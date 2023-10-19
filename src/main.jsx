import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js";
import { typeScale } from "./themeFonts.js";
import { createTheme } from "@mui/material";
import DevicesProvider from "./context/DevicesContext.jsx";
import "react-big-calendar/lib/css/react-big-calendar.css";

const customTheme = createTheme({
  ...theme,
  typography: typeScale.typography,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DevicesProvider>
        <AuthContextProvider>
          <ThemeProvider theme={customTheme}>
            <App />
          </ThemeProvider>
        </AuthContextProvider>
      </DevicesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
