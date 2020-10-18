import React from "react";
import { useEndpoints } from "service-hooks";

export default function ApisPage() {
  const endpoints = useEndpoints();
  return (
    <React.Fragment>
      {endpoints.data?.map((endpoint) => endpoint.url)}
    </React.Fragment>
  );
}
