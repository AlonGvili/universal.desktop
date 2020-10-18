import React from "react";
import Loader from "components/Loader";
import { Card } from "antd";
import { Link } from "react-router-dom";

export default function SecurityOverview() {
  return (
    <Loader tip="Loading Security Overview..." spinning>
      <Link to={`/security/tokens`}>
        <Card>
          <Card.Meta title="App Token" description="Navigate to tokens page" />
        </Card>
      </Link>
      <Link to={`/security/roles`}>
        <Card>
          <Card.Meta title="Roles" description="Navigate to Roles page" />
        </Card>
      </Link>
      <Link to={`/security/roles/12`}>
        <Card>
          <Card.Meta title="Role Id 1#2" description="Navigate to Role #12" />
        </Card>
      </Link>
    </Loader>
  );
}
