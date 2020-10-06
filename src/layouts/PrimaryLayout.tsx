import "../App.less";
import React from "react";
import Layout from "antd/es/layout";
import { Route, Switch } from "react-router-dom";

import Apis from "routes/Apis";
import Dashboards from "routes/Dashboards";
import Automation from "routes/Automation";
import Settings from "routes/Settings";
import Security from "routes/Security";

const PrimaryLayout = () => {
  return (
    <Layout.Content style={{ height: "100vh" }}>
      <Layout.Content style={{ padding: 24, marginTop: 64, marginBottom: 64 }}>
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
      </Layout.Content>
    </Layout.Content>
  );
};
export default PrimaryLayout;
