import React from "react";
import { Col, Layout, Menu, Row, Grid } from "antd";
import { Link } from "react-router-dom";
import {
  ApiOutlined,
  DashboardOutlined,
  SecurityScanOutlined,
  SettingOutlined,
  FolderAddOutlined,
  AppstoreAddOutlined,
  BuildOutlined,
  CodeOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  AppstoreOutlined,
  ScanOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";


const { useBreakpoint } = Grid;
export default function AppBar() {
  const { xs } = useBreakpoint();
  const userMenu = (
    <Menu.SubMenu
      title="Admin"
      icon={
        <Avatar
          style={{ marginRight: 8 }}
          size="small"
          shape="circle"
          src="https://avatars0.githubusercontent.com/u/34351424?s=460&u=8f71383aa390e9bf97bac08df2834f0846d76cc3&v=4"
        />
      }
    >
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="security" icon={<SecurityScanOutlined />}>
        Security
      </Menu.Item>
      <Menu.Item key="signout" icon={<LogoutOutlined />}>
        Signout
      </Menu.Item>
    </Menu.SubMenu>
  );

  return (
    <Layout.Header
      style={{ position: "fixed", zIndex: 10, width: "100%", display: "flex" }}
    >
      <Row align="stretch" justify="space-between" style={{ width: "inherit" }}>
        <Col>
          <Menu mode="horizontal" theme="dark">
            <Menu.SubMenu title="Apis">
              <Menu.Item key="apis" icon={<ApiOutlined />}>
                <Link to="/apis">Overview</Link>
              </Menu.Item>
              <Menu.Item key="ratelimits" icon={<ScanOutlined />}>
                <Link to="/rates">Rate Limits</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Automation">
              <Menu.Item key="scripts" icon={<CodeOutlined />}>
                <Link to="/scripts">Scripts</Link>
              </Menu.Item>
              <Menu.Item key="jobs" icon={<BuildOutlined />}>
                <Link to="/jobs">Jobs</Link>
              </Menu.Item>
              <Menu.Item key="schedules" icon={<ClockCircleOutlined />}>
                <Link to="/schedules">Schedules</Link>
              </Menu.Item>
              <Menu.Item key="variables" icon={<SafetyCertificateOutlined />}>
                <Link to="/variables">Variables</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Dashboards">
              <Menu.Item key="dashboards" icon={<DashboardOutlined />}>
                <Link to="/dashboards">Overview</Link>
              </Menu.Item>
              <Menu.Item key="frameworks" icon={<AppstoreAddOutlined />}>
                <Link to="/frameworks">Frameworks</Link>
              </Menu.Item>
              <Menu.Item key="components" icon={<AppstoreOutlined />}>
                <Link to="/components">Components</Link>
              </Menu.Item>
              <Menu.Item key="public_folders" icon={<FolderAddOutlined />}>
                <Link to="/folders">Folders</Link>
              </Menu.Item>
            </Menu.SubMenu>
            {xs && userMenu}
          </Menu>
        </Col>
        {!xs && (
          <Col>
            {" "}
            <Menu mode="horizontal" theme="dark">
              {userMenu}
            </Menu>
          </Col>
        )}
      </Row>
    </Layout.Header>
  );
}
