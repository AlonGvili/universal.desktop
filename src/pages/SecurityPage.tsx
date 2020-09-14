import React from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";

export default function SecurityPage() {
  const page = useParams<{ page: string }>().page;
  return (
    <Loader tip="Loading Security Page..." spinning>
      <span>{`Security ${page}`}</span>
    </Loader>
  );
}

SecurityPage.displayName = "SecurityPage";
