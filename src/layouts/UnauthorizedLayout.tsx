import "../App.less";
import React, { lazy } from "react";
import Layout from "antd/es/layout";
import Loader from "components/Loader";

const Login = lazy(
  () => import(/* webpackChunkName: 'Login' */ "routes/Login")
);

const UnauthorizedLayout = () => {
  return (
    <Layout.Content style={{ height: "100vh" }}>
      <Layout.Content style={{ padding: 24, marginTop: 64, marginBottom: 64 }}>
        <Loader>
          <Login />
        </Loader>
      </Layout.Content>
    </Layout.Content>
  );
};
export default UnauthorizedLayout;
