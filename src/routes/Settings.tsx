import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "components/Loader";
const SettingsPage = lazy(() => import("pages/SettingsPage"));

export default function Settings() {
  return (
    <Switch>
      <Loader>
        <Route path="/settings/:page" component={SettingsPage} />
      </Loader>
    </Switch>
  );
}

Settings.displayName = "Settings";
