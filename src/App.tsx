import React from "react";
import Router from "./Components/Router";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/theme";
import GlobalStyle from "./Styles/global-styles";

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
