import React, { lazy } from "react";
import { Button, Result } from "antd";
import { useHistory } from "react-router-dom";
const UnAuthorizedImage = lazy(
  () =>
    import(/* webpackChunkName: 'UnauthorizedImage' */ "./unauthorized-image")
);

export default function UnAuthorizedPage() {
  const history = useHistory();
  return (
    <Result
      title="Unauthorized Access"
      subTitle="Please login to view this page."
      icon={<UnAuthorizedImage />}
      extra={
        <Button type="primary" onClick={() => history.push("/login")}>
          Login
        </Button>
      }
    />
  );
}
