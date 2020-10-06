import React from "react";
import { Col, Layout, Menu, Row } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

export default function AppBar() {
  return (
    <Layout.Header
      style={{
        position: "fixed",
        padding: 0,
        zIndex: 10,
        width: "100%",
        display: "flex",
      }}
    >
      <Row align="stretch" justify="end" style={{ width: "inherit" }}>
        <Col>
          <Menu mode="horizontal" theme="dark">
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
              <Menu.Item key="signout" icon={<LogoutOutlined />}>
                Signout
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Col>
      </Row>
    </Layout.Header>
  );
}
