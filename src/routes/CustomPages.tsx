import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "components/Loader";
const NotFoundPage = lazy(() => import( /* webpackChunkName: 'NotFound' */ "pages/NotFoundPage"));
const UnAuthorizedPage = lazy(() => import( /* webpackChunkName: 'UnAuthorized' */ "pages/UnAuthorizedPage"));
const Login = lazy(() => import(/* webpackChunkName: 'Login' */ "pages/LoginPage"));

export default function CustomPages() {
  return (
    <Switch>
      <Loader>
        <Route  path="/pages/login" component={Login} />
        <Route  path="/pages/notFound" component={NotFoundPage} />
        <Route  path="/pages/unauthorized" component={UnAuthorizedPage} />
      </Loader>
    </Switch>
  );
}

