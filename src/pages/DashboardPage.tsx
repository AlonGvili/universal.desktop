import React from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";

export default function DashboardPage() {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  return (
    <Loader tip={`Loading Dashboard ${id}...`} spinning>
      <span>{`Dashboard Page ${id}`}</span>
    </Loader>
  );
}

DashboardPage.displayName = "DashboardPage";
