import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrimaryLayout from "layouts/PrimaryLayout";
import UnauthorizedLayout from "layouts/UnauthorizedLayout";
import { Layout } from "antd/es";
import SideBar from "components/SideBar";
import AppBar from "components/AppBar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/login">
          <UnauthorizedLayout />
        </Route>
        <Route path="/">
          <AppBar />
          <Layout style={{ overflow: "hidden" }}>
            <SideBar />
            <Layout.Content>
              <PrimaryLayout />
            </Layout.Content>
          </Layout>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
