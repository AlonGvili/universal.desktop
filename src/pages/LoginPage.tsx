import React from "react";
import Loader from "components/Loader";

export default function LoginPage() {
  return (
     <Loader tip="Loading Login Page..." spinning>
      <span>{`Login Page`}</span>
    </Loader>
  );
}

