import React from "react";
import Loader from "components/Loader";

export default function LicensePage() {
  return (
     <Loader tip="Loading License Page..." spinning>
      <span>{`License Page`}</span>
    </Loader>
  );
}

