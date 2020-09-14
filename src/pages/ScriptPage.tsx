import React from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";

export default function ScriptPage() {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  return (
     <Loader tip="Loading Script Page..." spinning>
      <span>{`Script Page ${id}`}</span>
    </Loader>
  );
}

ScriptPage.displayName = "ScriptPage";
