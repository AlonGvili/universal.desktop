import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loader from "components/Loader";
const EnvironmentPage = lazy(() => import("pages/EnvironmentPage"));
const LicensePage = lazy(() => import("pages/LicensePage"));

export default function SettingsPage() {
  return (
    <Loader spinning>
      <Switch>
        <Route path="/settings/environments">
          <EnvironmentPage />
        </Route>
        <Route path="/settings/licenses">
          <LicensePage />
        </Route>
        <Redirect to="/settings" />
      </Switch>
    </Loader>
  );
}
