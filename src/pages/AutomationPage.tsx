import React  from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";

export default function AutomationPage() {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  return (
    <Loader tip="Loading Automation Page..." spinning>
      <span>{`Automation Page ${id}`}</span>
    </Loader>
  );
}

AutomationPage.displayName = "AutomationPage";
