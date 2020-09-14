import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  FieldTimeOutlined,
  ApiOutlined,
  DashboardOutlined,
  SecurityScanOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function AppBar() {
  return (
    <Layout.Header style={{ backgroundColor: "#fff", padding: 0 }}>
      <Menu mode="horizontal" theme="dark" style={{ width: "100%" }}>
        <Menu.Item key="apis" icon={<ApiOutlined />}>
          <Link to="/apis">Apis</Link>
        </Menu.Item>
        <Menu.Item key="automation" icon={<FieldTimeOutlined />}>
          <Link to="/automation">Automation</Link>
        </Menu.Item>
        <Menu.Item key="dashboards" icon={<DashboardOutlined />}>
          <Link to="/dashboards">Dashboards</Link>
        </Menu.Item>
        <Menu.Item
          key="settings"
          icon={<SettingOutlined style={{ margin: "unset" }} />}
          mode="horizontal"
        >
          <Link to="/settings" />
        </Menu.Item>
        <Menu.Item
          key="security"
          icon={<SecurityScanOutlined style={{ margin: "unset" }} />}
        >
          <Link to="/security" style={undefined} />
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
}
