import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "components/Loader";
const ApiPage = lazy(() => import("pages/ApiPage"));

export default function Apis() {
  return (
    <Switch>
      <Loader>
        <Route path="/apis/:id" component={ApiPage} />
      </Loader>
    </Switch>
  );
}

Apis.displayName = "Apis";
