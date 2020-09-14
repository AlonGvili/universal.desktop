/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";

export default function ApiPage() {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  return (
    <Loader tip="Loading Api Page..." spinning>
      <span>{`Api Page Id: ${id}`}</span>
    </Loader>
  );
}

ApiPage.displayName = "ApiPage";
