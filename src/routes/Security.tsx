import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "components/Loader";

const SecurityOverview = lazy(() => import("pages/SecurityOverview"));
const SecurityPage = lazy(() => import("pages/SecurityPage"));
const RolePage = lazy(() => import("pages/RolePage"));

export default function Security() {
  return (
    <Switch>
      <Loader>
        <Route path="/security" exact>
          <SecurityOverview />
        </Route>
        <Route path="/security/:page" exact>
          <SecurityPage />
        </Route>
        <Route path="/security/:page/:id">
          <RolePage />
        </Route>
      </Loader>
    </Switch>
  );
}

