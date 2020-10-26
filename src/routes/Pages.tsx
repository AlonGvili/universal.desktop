import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "components/Loader";
const NotFound = lazy(() => import("pages/NotFound"));
const UnAuthorized = lazy(() => import("pages/UnAuthorized"));
const Login = lazy(() => import("pages/LoginPage"));

export default function Pages() {
  return (
    <Switch>
      <Loader>
        <Route  path="/pages/login" component={Login} />
        <Route  path="/pages/notFound" component={NotFound} />
        <Route  path="/pages/unauthorized" component={UnAuthorized} />
      </Loader>
    </Switch>
  );
}

