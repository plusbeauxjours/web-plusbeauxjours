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
  ReactGA.pageview("/");
  ReactGA.pageview("/projects");
  ReactGA.pageview("/projects/web/pinner-web");
  ReactGA.pageview("/projects/web/puber-web");
  ReactGA.pageview("/projects/web/airbnp-web");
  ReactGA.pageview("/projects/web/movie-web");
  ReactGA.pageview("/projects/app/pinner-app");
  ReactGA.pageview("/projects/app/awesome-weather-app");
  ReactGA.pageview("/projects/app/kitty-todo-app");
  ReactGA.pageview("/projects/app/movie-app");
  ReactGA.pageview("/architecture");
}

ReactDOM.render(<App />, document.getElementById("root"));
