import React from "react";
import { Switch, Route } from "react-router-dom";
import Student from "./student/Student";
import Admin from "./admin/Admin";
import Login from './Login';

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/student" component={Student} />
    <Route path="/admin" component={Admin} />
  </Switch>
);