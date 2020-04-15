import React from "react";
import Router from "./Components/Router";
import { ToastContainer, toast } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/theme";
import GlobalStyle from "./Styles/global-styles";

export default () => (
  <ThemeProvider theme={theme}>
    <ToastContainer position={toast.POSITION.TOP_RIGHT} />
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
