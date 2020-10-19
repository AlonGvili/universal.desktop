import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "components/Loader";
const LoginPage = lazy(() => import("pages/LoginPage"));

export default function Login() {
  return (
    <Switch>
      <Loader>
        <Route path="/login" component={LoginPage} />
      </Loader>
    </Switch>
  );
}

