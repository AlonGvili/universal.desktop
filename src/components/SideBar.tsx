import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  ApiOutlined,
  DashboardOutlined,
  CodeOutlined,
} from "@ant-design/icons";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <Layout.Sider
    theme="dark"
      collapsed={isCollapsed}
      collapsible={true}
      style={{ paddingTop: 88 }}
      onCollapse={() => setIsCollapsed((old) => !old)}
    >
      <Menu
        mode="inline"
        theme="dark"
        style={{ height: "100%" }}
      >
        <Menu.SubMenu icon={<ApiOutlined />} title="Apis">
          <Menu.Item key="apis">
            <Link to="/apis">Overview</Link>
          </Menu.Item>
          <Menu.Item key="ratelimits">
            <Link to="/rates">Rate Limits</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu icon={<CodeOutlined />} title="Automation">
          <Menu.Item key="scripts">
            <Link to="/scripts">Scripts</Link>
          </Menu.Item>
          <Menu.Item key="jobs">
            <Link to="/jobs">Jobs</Link>
          </Menu.Item>
          <Menu.Item key="schedules">
            <Link to="/schedules">Schedules</Link>
          </Menu.Item>
          <Menu.Item key="variables">
            <Link to="/variables">Variables</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu icon={<DashboardOutlined />} title="Dashboards">
          <Menu.Item key="dashboards">
            <Link to="/dashboards">Overview</Link>
          </Menu.Item>
          <Menu.Item key="frameworks">
            <Link to="/frameworks">Frameworks</Link>
          </Menu.Item>
          <Menu.Item key="components">
            <Link to="/components">Components</Link>
          </Menu.Item>
          <Menu.Item key="public_folders">
            <Link to="/folders">Folders</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  );
}
