import React from "react";
import Loader from "components/Loader";

export default function EnvironmentPage() {
  return (
     <Loader tip="Loading Environment Page..." spinning>
      <span>{`Environment Page`}</span>
    </Loader>
  );
}

