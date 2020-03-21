import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import PinnerWeb from "../Routes/Web/PinnerWeb";
import PuberWeb from "../Routes/Web/PuberWeb";
import AirbnpWeb from "../Routes/Web/AirbnpWeb";
import MovieWeb from "../Routes/Web/MovieWeb";
import NoteWeb from "../Routes/Web/NoteWeb";
import PinnerApp from "../Routes/App/PinnerApp";
import AwesomeWeatherApp from "../Routes/App/AwesomeWeatherApp";
import KittyTodoApp from "../Routes/App/KittyTodoApp";
import MovieApp from "../Routes/App/MovieApp";
import Architecture from "../Routes/Architecture";
import PrivacyPolicy from "../Routes/PrivacyPolicy";
import Header from "./Header";
import Projects from "../Routes/Projects";
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
      <Route path="/privacy-policy" exact component={PrivacyPolicy} />
      <Route path="/projects" exact component={Projects} />
      {/* web */}
      <Route path="/projects/web/pinner-web" component={PinnerWeb} />
      <Route path="/projects/web/puber-web" component={PuberWeb} />
      <Route path="/projects/web/airbnp-web" component={AirbnpWeb} />
      <Route path="/projects/web/movie-web" component={MovieWeb} />
      <Route path="/projects/web/note-web" component={NoteWeb} />
      {/* app */}
      <Route path="/projects/app/pinner-app" component={PinnerApp} />
      <Route
        path="/projects/app/awesome-weather-app"
        component={AwesomeWeatherApp}
      />
      <Route path="/projects/app/kitty-todo-app" component={KittyTodoApp} />
      <Route path="/projects/app/movie-app" component={MovieApp} />
      {/* architectural works */}
      <Route path="/architecture" component={Architecture} />
    </Wrapper>
  </Router>
);
