import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "components/Loader";
import ContentProvider from "context/content/Provider";
import DrawerProvider from "context/drawer/Provider";

const DashboardsOverview = lazy(() => import("pages/DashboardsOverview"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));

export default function Dashboards() {
  return (
    <Switch>
      <Loader>
        <DrawerProvider>
          <Route path="/dashboards" exact>
            <DashboardsOverview />
          </Route>
          <Route path="/dashboards/:id">
            <ContentProvider>
              <DashboardPage />
            </ContentProvider>
          </Route>
        </DrawerProvider>
      </Loader>
    </Switch>
  );
}

Dashboards.displayName = "Dashboards";
