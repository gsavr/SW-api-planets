import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../components/App";
import NotFoundPage from "../components/NotFoundPage";
import Films from "../components/Films/Films";
import Planet from "../components/Planet/Planet";
import Residents from "../components/Residents/Residents";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/planets/:planetId" component={Planet} />
        <Route path="/planets/:planetId/films" component={Films} />
        <Route path="/planets/:planetId/residents" component={Residents} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
