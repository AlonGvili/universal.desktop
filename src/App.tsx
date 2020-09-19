import React from "react";
import { BrowserRouter } from "react-router-dom";

// import AuthProvider from "context/auth/AuthProvider";
// import AppProvider from "context/app/AppProvider";
import PrimaryLayout from "layouts/PrimaryLayout";
import { Layout } from "antd/es";

function App() {
  return (
    <BrowserRouter>
      <Layout >
        {/* <AuthProvider> */}
        {/* <AppProvider> */}
        <PrimaryLayout />
        {/* </AppProvider> */}
        {/* </AuthProvider> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
