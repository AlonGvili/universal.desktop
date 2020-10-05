import "../App.less";
import React from "react";
import Layout from "antd/es/layout";
import AppBar from "components/AppBar";
import { Route, Switch } from "react-router-dom";

import Apis from "routes/Apis";
import Dashboards from "routes/Dashboards";
import Automation from "routes/Automation";
import Settings from "routes/Settings";
import Security from "routes/Security";

const PrimaryLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppBar />
      <Layout.Content style={{ marginTop: 64 }}>
        <Layout.Content style={{ padding: 24 }}>
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
    </Layout>
  );
};
export default PrimaryLayout;
