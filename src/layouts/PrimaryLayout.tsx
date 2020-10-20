import "../App.less";
import React, { lazy } from "react";
import Layout from "antd/es/layout";
import { Route, Switch } from "react-router-dom";
import Loader from "components/Loader";

import DrawerProvider from "context/drawer/Provider";

const Apis = lazy(
  () => import(/* webpackChunkName: 'Apis' */ "routes/Apis")
);
const Dashboards = lazy(
  () => import(/* webpackChunkName: 'Dashboards' */ "routes/Dashboards")
);
const Automation = lazy(
  () => import(/* webpackChunkName: 'Automation' */ "routes/Automation")
);
const Settings = lazy(
  () => import(/* webpackChunkName: 'Settings' */ "routes/Settings")
);
const Security = lazy(
  () => import(/* webpackChunkName: 'Security' */ "routes/Security")
);

const PrimaryLayout = () => {
  return (
    <Layout.Content style={{ height: "100vh" }}>
      <Layout.Content style={{ padding: 24, marginTop: 64, marginBottom: 64 }}>
        <Loader>
          <DrawerProvider>
          <Switch>
            <Route path="/apis">
              <Apis />
            </Route>
            <Route path="/automation">
              <Automation />
            </Route>
            <Route path="/dashboards">
              <Dashboards />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/security">
              <Security />
            </Route>
          </Switch>
          </DrawerProvider>
        </Loader>
      </Layout.Content>
    </Layout.Content>
  );
};
export default PrimaryLayout;
