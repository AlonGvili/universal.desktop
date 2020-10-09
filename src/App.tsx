import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimaryLayout from "layouts/PrimaryLayout";
import { Layout } from "antd/es";
import SideBar from "components/SideBar";
import AppBar from "components/AppBar";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Layout style={{ overflow: "hidden" }}>
        <SideBar />
        <Layout.Content>
          <PrimaryLayout />
        </Layout.Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
