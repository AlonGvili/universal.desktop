import { GiftOutlined } from "@ant-design/icons";
import { Typography, Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function ComponentsInfo() {
  return (
    <Space direction="vertical" size={48}>
      <Space
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography.Text
          style={{
            fontSize: 20,
            fontFamily: "SFProDisplay-Semibold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          About Components
        </Typography.Text>
        <Link to="/dashboard/marketplace">
          <Button type="text" icon={<GiftOutlined />}>
            Marketplace
          </Button>
        </Link>
      </Space>
      <Typography.Text
        style={{
          fontSize: 16,
          lineHeight: "22px",
          fontFamily: "SFProDisplay-Regular",
        }}
      >
        You can select components that you want to add to this dashboard.
        Components are external PowerShell modules that are hosted in the
        Universal Dashboard Marketplace. If you want to add more components to
        the table below, you can navigate to the marketplace page by clicking
        the Marketplace button
      </Typography.Text>
    </Space>
  );
}
