import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import PinnerWeb from "../Routes/Web/PinnerWeb";
import PuberWeb from "../Routes/Web/PuberWeb";
import AirbnpWeb from "../Routes/Web/AirbnpWeb";
import MovieWeb from "../Routes/Web/MovieWeb";
import NoteWeb from "../Routes/Web/NoteWeb";
import PinnerApp from "../Routes/App/PinnerApp";
import FukinWeatherApp from "../Routes/App/FukinWeatherApp";
import KawaiTodoApp from "../Routes/App/KawaiTodoApp";
import MovieApp from "../Routes/App/MovieApp";
import Architecture from "../Routes/Architecture";
import PrivacyPolicy from "../Routes/PrivacyPolicy";
import Header from "./Header";
import Portfolio from "../Routes/Portfolio";
import styled from "../Styles/typed-components";

const Wrapper = styled.div`
  padding-top: 45px;
  min-height: 80vh;
  min-height: 50vh;
`;

export default () => (
  <Router>
    <Wrapper>
      <Header />
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/"
        exact
        component={Home}
      />
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/privacy-policy"
        exact
        component={PrivacyPolicy}
      />
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/portfolio"
        exact
        component={Portfolio}
      />
      {/* web */}
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/portfolio/web/pinner-web"
        component={PinnerWeb}
      />
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/portfolio/web/puber-web"
        component={PuberWeb}
      />
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/portfolio/web/airbnp-web"
        component={AirbnpWeb}
      />
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/portfolio/web/movie-web"
        component={MovieWeb}
      />
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/portfolio/web/note-web"
        component={NoteWeb}
      />
      {/* app */}
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/portfolio/app/pinner-app"
        component={PinnerApp}
      />
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/portfolio/app/fukin-weather-app"
        component={FukinWeatherApp}
      />
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/portfolio/app/kawai-todo-app"
        component={KawaiTodoApp}
      />
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/portfolio/app/movie-app"
        component={MovieApp}
      />
      {/* architectural works */}
      <Route
        onUpdate={() => window.scrollTo(0, 0)}
        path="/architecture"
        component={Architecture}
      />
    </Wrapper>
  </Router>
);
