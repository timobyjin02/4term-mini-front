import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
);
