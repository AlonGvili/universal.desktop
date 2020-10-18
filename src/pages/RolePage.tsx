/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useRouteMatch } from "react-router-dom";
import Loader from "components/Loader";

export default function RolePage() {
  const match = useRouteMatch<{ id?: string }>("/security/roles/:id");

  return (
    <Loader tip="Loading Role Page..." spinning>
      <span>{`User Role Id:${match?.params?.id}`}</span>
    </Loader>
  );
}
