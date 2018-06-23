import React from "react";
import { Switch, Route } from "react-router-dom";
import Bio from "./Bio";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/bio" component={Bio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  </div>
);

export default Main;
