import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Main from './Main.js';
import About from './About.js';
import Team from './Team.js';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Redirect exact path="/" to="/main" />
          <Route path="/main" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
