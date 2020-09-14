import Loader from "components/Loader";
import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const AutomationPage = lazy(() => import("pages/AutomationPage"));
const ScriptsOverview = lazy(() => import("pages/ScriptsOverview"));
const ScriptPage = lazy(() => import("pages/ScriptPage"));

export default function Automation() {
  return (
    <Switch>
      <Loader>
        <Route path="/automation" exact>
          <AutomationPage />
        </Route>
        <Route path="/automation/scripts">
          <ScriptsOverview />
        </Route>
        <Route path="/automation/scripts/:id">
          <ScriptPage />
        </Route>
      </Loader>
    </Switch>
  );
}

Automation.displayName = "Automation";
