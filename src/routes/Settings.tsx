import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "components/Loader";
const SettingsPage = lazy(() => import("pages/SettingsPage"));
const SettingsOverview = lazy(() => import("pages/SettingsOverview"));

export default function Settings() {
  return (
    <Switch>
      <Loader>
        <Route exact path="/settings" component={SettingsOverview} />
        <Route path="/settings/:page" component={SettingsPage} />
      </Loader>
    </Switch>
  );
}

Settings.displayName = "Settings";
