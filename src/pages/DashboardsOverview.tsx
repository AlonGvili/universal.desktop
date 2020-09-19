import React from "react";
import Axios, { AxiosResponse, AxiosError } from "axios";
import { queryCache, useQuery } from "react-query";
import { Dashboard } from "../types";
import {
  Form,
  Input,
  Button,
  Typography,
  Row,
  Col,
  Space,
  Card,
  Select,
  Grid,
} from "antd/es";
import {
  AppstoreAddOutlined,
  CodeOutlined,
  DeleteFilled,
  EditFilled,
  EditOutlined,
  PlusOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import CardHeader from "components/card/TitleAndDescription";
import BodyLink from "components/card/BodyLink";
import InfoSection from "components/card/InfoSection";
import { Divider } from "antd";
import { presetDarkPalettes, presetPrimaryColors } from "@ant-design/colors";

const byteSize = require("byte-size");
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

const { useBreakpoint } = Grid;

export default function DashboardsOverview() {
  const breakpoint = useBreakpoint();
  const { data } = useDashboards();
  return (
    <>
      <Row gutter={[16,16]}>
        <Col span={24}>
          <Card bordered={false}>
            <Form colon={false} name="search_dashboard" layout="inline">
              <Form.Item>
                <Typography style={{ marginBottom: 0 }}>
                  <Typography.Title level={5}>
                    Search and Filter
                  </Typography.Title>
                </Typography>
              </Form.Item>
              <Form.Item>
                <Form.Item name="search" noStyle>
                  <Input.Search
                    placeholder="Search for a dashboards"
                    bordered={true}
                    allowClear
                  />
                </Form.Item>
              </Form.Item>

              <Form.Item name="filter_by_status">
                <Select placeholder="Filter By Status" bordered={true}>
                  <Select.Option value={0}>Stopped</Select.Option>
                  <Select.Option value={1}>Running</Select.Option>
                  <Select.Option value={3}>NA</Select.Option>
                  <Select.Option value={4}>Waiting for feedback</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {data?.map((dashboard, index) => {
          return (
            <Col key={index} lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
              <Card
                bodyStyle={{ padding: 24 }}
                bordered={false}
                style={{ minWidth: 280, height: "100%" }}
                headStyle={{ borderBottom: "unset" }}
                hoverable
              >
                <BodyLink id={dashboard.id}>
                  {/* dashboard name and description */}

                  <CardHeader
                    name={dashboard.name}
                    description={dashboard.description}
                  />

                  <Space direction="vertical" size="large">
                    {/* dashboard information */}

                    <InfoSection>
                      <Space direction="vertical">
                        <Space>
                          <CodeOutlined />
                          {dashboard.powerShellVersion?.version || "7.0.3"}
                        </Space>
                        <Space>
                          <AppstoreAddOutlined />
                          {dashboard.dashboardFramework?.name}
                        </Space>
                      </Space>
                    </InfoSection>
                  </Space>
                </BodyLink>
                <Divider
                  style={{ width: "100%" }}
                  type="horizontal"
                  dashed
                  plain
                />
                <Space
                  style={{ justifyContent: "space-between", width: "100%" }}
                >
                  <Button.Group>
                    <Button icon={<DeleteFilled />} type="text" />
                    <Button icon={<EditFilled />} type="text" />
                  </Button.Group>
                  <Button.Group>
                    <Button
                      icon={
                        <PoweroffOutlined
                          style={{
                            color:
                              dashboard.status === 1
                                ? `${presetDarkPalettes["blue"][6]}`
                                : presetDarkPalettes["red"][6],
                          }}
                        />
                      }
                      type="text"
                    />
                  </Button.Group>
                </Space>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
