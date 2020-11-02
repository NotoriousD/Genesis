import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PlanetPage } from "../pages/PlanetPage";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/planet/:id" component={PlanetPage} />
      </Switch>
    </div>
  );
};

export default Router;
