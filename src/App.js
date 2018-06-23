import React from "react";
import { Route, withRouter } from "react-router-dom";
import Header from "./Header";
import HappyCarousel from "./HappyCarousel";
import Bio from "./Bio";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import Main from "./Main";
import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <HappyCarousel />
    <Route exact path="/" render={() => <Main />} />
    <Route exact path="/Bio" render={() => <Bio />} />
    <Route exact path="/Contact" render={() => <Contact />} />
    <Route exact path="/Projects" render={() => <Projects />} />
    <Route exact path="/Resume" render={() => <Resume />} />
  </div>
);

export default withRouter(App);
