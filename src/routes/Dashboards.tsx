import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "components/Loader";

const DashboardsOverview = lazy(() => import("pages/DashboardsOverview"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));

export default function Dashboards() {
  return (
    <Switch>
      <Loader>
        <Route path="/dashboards" exact>
          <DashboardsOverview />
        </Route>
        <Route path="/dashboards/:id">
          <DashboardPage />
        </Route>
      </Loader>
    </Switch>
  );
}

Dashboards.displayName = "Dashboards";
