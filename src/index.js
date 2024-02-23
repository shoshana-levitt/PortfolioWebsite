import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

/* Import and destructure main from src/component/index.js
and anything else you may need here */

const container = document.getElementById("root");
const root = createRoot(container);

const theme = createTheme({
  palette: {
    primary: {
      main: "#101010",
    },
    secondary: {
      main: "#101010",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    allVariants: {
      color: "#101010",
    },
  },
});

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </Provider>
);
