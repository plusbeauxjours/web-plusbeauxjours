import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import PinnerWeb from "../Routes/Web/PinnerWeb";
import PuberWeb from "../Routes/Web/PuberWeb";
import AirbnpWeb from "../Routes/Web/AirbnpWeb";
import MovieWeb from "../Routes/Web/MovieWeb";
import PinnerApp from "../Routes/App/PinnerApp";
import AwesomeWeatherApp from "../Routes/App/AwesomeWeatherApp";
import KittyTodoApp from "../Routes/App/KittyTodoApp";
import MovieApp from "../Routes/App/MovieApp";
import Architecture from "../Routes/Architecture";
import PrivacyPolicy from "../Routes/PrivacyPolicy";
import Header from "./Header";
import Projects from "../Routes/Projects";
import styled from "../Styles/typed-components";
import JahanuriApp from "../Routes/App/JahanuriApp";

const Wrapper = styled.div`
  padding-top: 45px;
  min-height: 80vh;
  min-height: 50vh;
`;

ReactGA.initialize(' UA-166957436-1")', { debug: true });
const onUpdate = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export default () => {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Route onEnter={onUpdate} path="/" exact component={Home} />
        <Route
          onEnter={onUpdate}
          path="/privacy-policy"
          exact
          component={PrivacyPolicy}
        />
        <Route onEnter={onUpdate} path="/projects" exact component={Projects} />
        {/* web */}
        <Route
          onEnter={onUpdate}
          path="/projects/web/pinner-web"
          component={PinnerWeb}
        />
        <Route
          onEnter={onUpdate}
          path="/projects/web/puber-web"
          component={PuberWeb}
        />
        <Route
          onEnter={onUpdate}
          path="/projects/web/airbnp-web"
          component={AirbnpWeb}
        />
        <Route
          onEnter={onUpdate}
          path="/projects/web/movie-web"
          component={MovieWeb}
        />
        {/* app */}
        <Route
          onEnter={onUpdate}
          path="/projects/app/jahanuri-app"
          component={JahanuriApp}
        />
        <Route
          onEnter={onUpdate}
          path="/projects/app/pinner-app"
          component={PinnerApp}
        />
        <Route
          onEnter={onUpdate}
          path="/projects/app/awesome-weather-app"
          component={AwesomeWeatherApp}
        />
        <Route
          onEnter={onUpdate}
          path="/projects/app/kitty-todo-app"
          component={KittyTodoApp}
        />
        <Route
          onEnter={onUpdate}
          path="/projects/app/movie-app"
          component={MovieApp}
        />
        {/* architectural works */}
        <Route
          onEnter={onUpdate}
          path="/architecture"
          component={Architecture}
        />
      </Wrapper>
    </Router>
  );
};
