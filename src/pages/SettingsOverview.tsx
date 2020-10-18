import React from "react";
import Loader from "components/Loader";

export default function SettingsOverview() {
  return (
     <Loader tip="Loading Script Page..." spinning>
      <span>{`Settings Overview Page`}</span>
    </Loader>
  );
}

