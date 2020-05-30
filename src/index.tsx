import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

ReactGA.initialize("UA-166957436-1", {
  debug: false,
  titleCase: false,
  gaOptions: {
    siteSpeedSampleRate: 100,
  },
});
if (window.location.host === "https://www.plusbeauxjours.com") {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(<App />, document.getElementById("root"));
