import React, { useState, useEffect, useRef } from "react";
import {
  Space,
  Card,
  Alert,
  Skeleton,
  Row,
  Col,
  Badge,
  Divider,
  Layout,
  Menu,
  Button,
  Typography,
} from "antd";
import Axios, { AxiosResponse, AxiosError } from "axios";
import { queryCache, useQuery } from "react-query";
import { Dashboard } from "../types";
import { Link } from "react-router-dom";
import { setStatusColor } from "utilities/utils";
import { Dropdown, PageHeader, Tag } from "antd/es";
import { Progress } from "antd";
import { useSize } from "ahooks";
import { presetPrimaryColors, blue } from "@ant-design/colors";
import {
  EditOutlined,
  GlobalOutlined,
  PlaySquareOutlined,
  DeleteOutlined,
  MoreOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Bullet } from "@ant-design/charts";
import { BulletConfig } from "@ant-design/charts/es/bullet";

const DemoBullet = (props: {
  data: { title: string; measures: number[]; targets: number[] }[]
}) => {
  const config: BulletConfig = {
    data: props.data,
    forceFit: true,
    height: 80,
    rangeMax: 100,
  };
  return <Bullet {...config} />;
};

const url = `http://localhost:5000/api/v1`;

export async function fetchDashboards(): Promise<Dashboard[]> {
  const dashboards: Dashboard[] = await Axios.get(
    `https://my-json-server.typicode.com/alongvili/psu/Dashboards`
  ).then((res: AxiosResponse<Dashboard[]>) => res.data);

  dashboards.forEach((dashboard: Dashboard) => {
    queryCache.setQueryData(
      ["dashboard", { dashboardId: dashboard.id }],
      dashboard
    );
  });

  return dashboards;
}

export function useDashboards() {
  return useQuery("dashboards", fetchDashboards, {
    onError: (error: AxiosError) => error,
    suspense: true,
  });
}

export default function DashboardsOverview() {
  const { data } = useDashboards();
  return (
    <Row
      gutter={[
        { lg: 24, md: 16, xs: 0 },
        { lg: 24, md: 16, xs: 8 },
      ]}
    >
      <Col lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
        <Card
          bodyStyle={{ padding: 0 }}
          bordered={false}
          style={{ width: "100%" }}
        >
          <Layout>
            <Layout.Content
              style={{
                backgroundColor: "#fff",
                padding: 24,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Card.Meta
                style={{ flex: "0 1 35%", marginBottom: 24 }}
                title="Help Desk Portal"
                description="Portal dashboard to the helpdesk ppl, so the can manage users password"
              />
              <Space
                align="baseline"
                style={{ flex: 1, justifyContent: "space-evenly" }}
              >
                <Progress
                  type="dashboard"
                  percent={32}
                  width={100}
                  format={(percent) => (
                    <Typography>
                      <Typography.Paragraph style={{ fontSize: 12 }}>
                        {`Memory`}
                      </Typography.Paragraph>
                      <Typography.Text
                        style={{ fontSize: 18, fontWeight: 600 }}
                      >
                        {`${580}mb`}
                      </Typography.Text>
                    </Typography>
                  )}
                />
                <Progress
                  type="dashboard"
                  percent={36}
                  width={100}
                  format={(percent) => (
                    <Typography>
                      <Typography.Paragraph style={{ fontSize: 12 }}>
                        {`Endpoints`}
                      </Typography.Paragraph>
                      <Typography.Text
                        style={{ fontSize: 18, fontWeight: 600 }}
                      >
                        {`${36}`}
                      </Typography.Text>
                    </Typography>
                  )}
                />
                <Progress
                  type="dashboard"
                  percent={0.1264 * 100}
                  width={100}
                  format={(percent) => (
                    <Typography>
                      <Typography.Paragraph style={{ fontSize: 12 }}>
                        {`Sessions`}
                      </Typography.Paragraph>
                      <Typography.Text
                        style={{ fontSize: 18, fontWeight: 600 }}
                      >
                        {`${1264}`}
                      </Typography.Text>
                    </Typography>
                  )}
                />
              </Space>
            </Layout.Content>
            <Layout.Sider
              collapsed={true}
              collapsible={false}
              collapsedWidth={48}
              style={{ width: 48 }}
            >
              <Menu mode="inline" style={{ width: 48 }} theme="light">
                <Menu.Item
                  key="edit"
                  icon={<EditOutlined />}
                  style={{ padding: "0px 16px" }}
                />
                <Menu.Item
                  key="view"
                  icon={<GlobalOutlined />}
                  style={{ padding: "0px 16px" }}
                />
                <Menu.Item
                  key="start"
                  icon={<PlaySquareOutlined />}
                  style={{ padding: "0px 16px" }}
                />
                <Menu.Item
                  key="delete"
                  danger={true}
                  icon={<DeleteOutlined />}
                  style={{ padding: "0px 16px" }}
                />
              </Menu>
            </Layout.Sider>
          </Layout>
        </Card>
      </Col>
      <Col lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
        <Card
          bodyStyle={{ padding: 0 }}
          bordered={false}
          style={{ width: "100%" }}
        >
          <Layout>
            <Layout.Content
              style={{
                backgroundColor: "#fff",
                // padding: 24,
              }}
            >
              <PageHeader
                title="Help Desk Portal"
                // subTitle="Portal dashboard to the helpdesk ppl, so the can manage users password"
                ghost={true}
                tags={[
                  <Tag color="blue" title="production">
                    production
                  </Tag>,
                  <Tag color="pink" title="helpdesk">
                    helpdesk
                  </Tag>,
                ]}
              >
                <Space
                  align="baseline"
                  style={{ flex: 1, justifyContent: "space-evenly" }}
                >
                  <Progress
                    type="dashboard"
                    percent={32}
                    width={120}
                    format={(percent) => (
                      <Typography>
                        <Typography.Paragraph style={{ fontSize: 12 }}>
                          {`Memory`}
                        </Typography.Paragraph>
                        <Typography.Text
                          style={{ fontSize: 18, fontWeight: 600 }}
                        >
                          {`${580}mb`}
                        </Typography.Text>
                      </Typography>
                    )}
                  />
                  <Progress
                    type="dashboard"
                    percent={36}
                    width={120}
                    format={(percent) => (
                      <Typography>
                        <Typography.Paragraph style={{ fontSize: 12 }}>
                          {`Endpoints`}
                        </Typography.Paragraph>
                        <Typography.Text
                          style={{ fontSize: 18, fontWeight: 600 }}
                        >
                          {`${36}`}
                        </Typography.Text>
                      </Typography>
                    )}
                  />
                  <Progress
                    type="dashboard"
                    percent={0.1264 * 100}
                    width={120}
                    format={(percent) => (
                      <Typography>
                        <Typography.Paragraph style={{ fontSize: 12 }}>
                          {`Sessions`}
                        </Typography.Paragraph>
                        <Typography.Text
                          style={{ fontSize: 18, fontWeight: 600 }}
                        >
                          {`${1264}`}
                        </Typography.Text>
                      </Typography>
                    )}
                  />
                </Space>
              </PageHeader>
            </Layout.Content>
            <Layout.Sider
              collapsed={true}
              collapsible={false}
              collapsedWidth={48}
              style={{ width: 48 }}
            >
              <Menu mode="inline" style={{ width: 48 }} theme="dark">
                <Menu.Item
                  key="edit"
                  icon={<EditOutlined />}
                  style={{ padding: "0px 16px" }}
                />
                <Menu.Item
                  key="view"
                  icon={<GlobalOutlined />}
                  style={{ padding: "0px 16px" }}
                />
                <Menu.Item
                  key="start"
                  icon={<PlaySquareOutlined />}
                  style={{ padding: "0px 16px" }}
                />
                <Menu.Item
                  key="delete"
                  danger={true}
                  icon={<DeleteOutlined />}
                  style={{ padding: "0px 16px" }}
                />
              </Menu>
            </Layout.Sider>
          </Layout>
        </Card>
      </Col>
      <Col lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
        <Card
          bodyStyle={{ padding: 0 }}
          bordered={false}
          style={{ width: "100%" }}
          extra={
            <Dropdown
              placement="bottomRight"
              overlay={
                <Menu theme="dark">
                  <Menu.Item key="edit" icon={<EditOutlined />}>
                    Edit
                  </Menu.Item>
                  <Menu.Item key="view" icon={<GlobalOutlined />}>
                    View
                  </Menu.Item>
                  <Menu.Item key="start" icon={<PlaySquareOutlined />}>
                    Start
                  </Menu.Item>
                  <Menu.Item key="delete" icon={<DeleteOutlined />}>
                    Delete
                  </Menu.Item>
                </Menu>
              }
            >
              <Button icon={<MenuOutlined />} type="text" />
            </Dropdown>
          }
        >
          <Layout style={{ height: 128 }}>
            <Layout.Content
              style={{ backgroundColor: "#1f1f1f" }}
            ></Layout.Content>
          </Layout>
        </Card>
      </Col>
    </Row>
  );
}
