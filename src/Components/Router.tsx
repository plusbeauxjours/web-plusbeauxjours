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
      <Route path="/" exact component={Home} />
      <Route path="/portfolio" exact component={Portfolio} />
      {/* web */}
      <Route path="/portfolio/web/pinner-web" component={PinnerWeb} />
      <Route path="/portfolio/web/puber-web" component={PuberWeb} />
      <Route path="/portfolio/web/airbnp-web" component={AirbnpWeb} />
      <Route path="/portfolio/web/movie-web" component={MovieWeb} />
      <Route path="/portfolio/web/note-web" component={NoteWeb} />
      {/* app */}
      <Route path="/portfolio/app/pinner-app" component={PinnerApp} />
      <Route
        path="/portfolio/app/fukin-weather-app"
        component={FukinWeatherApp}
      />
      <Route path="/portfolio/app/kawai-todo-app" component={KawaiTodoApp} />
      <Route path="/portfolio/app/movie-app" component={MovieApp} />
      {/* architectural works */}
      <Route path="/architecture" component={Architecture} />
    </Wrapper>
  </Router>
);
