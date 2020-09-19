import { Space } from "antd/es";
import React, { Children } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

export default function BodyLink({
  id,
  children,
}: {
  id: number;
  children: typeof Children[];
}) {
  const location = useLocation();
  const history = useHistory();
  return (
    <Link
      to={{
        pathname: `/dashboards/${id}`,
        state: {
          to: `${location.pathname}${location.search}${location.hash}`,
          from: `${history.location.pathname}${history.location.search}${history.location.hash}`,
        },
      }}
      style={{
        width: "100%",
      }}
    >
      {/* wrapper for the main card layout */}
      <Space direction="vertical" size={24} style={{ width: "100%" }}>
        {children}
      </Space>
    </Link>
  );
}
