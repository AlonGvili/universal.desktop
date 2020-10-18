import React from "react";
import Loader from "components/Loader";
import { Card } from "antd";
import { Link } from "react-router-dom";

export default function ScriptsOverview() {
  return (
    <Loader tip="Loading Scripts Overview..." spinning>
      <Link to={`/automation/scripts/#1`}>
        <Card>
          <Card.Meta title="Script #1" description="Navigate to script #1" />
        </Card>
      </Link>
      <Link to={`/automation/scripts/#2`}>
        <Card>
          <Card.Meta title="Script #2" description="Navigate to script #2" />
        </Card>
      </Link>
    </Loader>
  );
}

