import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "components/Loader";
const NotFound = lazy(() => import( /* webpackChunkName: 'NotFound' */ "pages/NotFound"));
const UnAuthorized = lazy(() => import( /* webpackChunkName: 'UnAuthorized' */ "pages/UnAuthorized"));
const Login = lazy(() => import(/* webpackChunkName: 'Login' */ "pages/LoginPage"));

export default function CustomPages() {
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

