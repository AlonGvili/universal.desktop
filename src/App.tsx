import React from "react";
import { BrowserRouter } from "react-router-dom";

// import AuthProvider from "context/auth/AuthProvider";
// import AppProvider from "context/app/AppProvider";
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
          {/* <AuthProvider> */}
          {/* <AppProvider> */}
          <PrimaryLayout />
          {/* </AppProvider> */}
          {/* </AuthProvider> */}
        </Layout.Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
