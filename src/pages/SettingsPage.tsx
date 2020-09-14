import React from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";

export default function SettingsPage() {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  return (
    <Loader tip="Loading Settings Page..." spinning>
      <span>{`Settings Page ${id}`}</span>
    </Loader>
  );
}

SettingsPage.displayName = "SettingsPage";
