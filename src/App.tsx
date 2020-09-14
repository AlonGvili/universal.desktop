import React from "react";
import { BrowserRouter } from "react-router-dom";

// import AuthProvider from "context/auth/AuthProvider";
// import AppProvider from "context/app/AppProvider";
import PrimaryLayout from "layouts/PrimaryLayout";

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        {/* <AppProvider> */}
          <PrimaryLayout />
        {/* </AppProvider> */}
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;
