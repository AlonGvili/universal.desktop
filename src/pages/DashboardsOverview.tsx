import React, { useState } from "react";
import Axios, { AxiosError } from "axios";
import { queryCache, useQuery } from "react-query";
import { Dashboard, Role } from "../types";
import {
  Form,
  Input,
  Button,
  Typography,
  Row,
  Col,
  Space,
  Card,
} from "antd/es";
import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  CodeOutlined,
  DeleteOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  TableOutlined,
} from "@ant-design/icons";

import CardHeader from "components/card/TitleAndDescription";
import BodyLink from "components/card/BodyLink";
import InfoSection from "components/card/InfoSection";
import UpdateModal from "components/UpdateModal";
// import TagsSection from "components/card/Tags";
import { Divider, Popconfirm, Radio, Tooltip } from "antd";
import { setPowerIconColor, appSearch } from "utilities/utils";
import PSUTable from "components/Table";
import { presetPrimaryColors } from "@ant-design/colors";

// const byteSize = require("byte-size");
// const url = `http://localhost:5000/api/v1`;

export async function fetchDashboards(): Promise<Dashboard[]> {
  const dashboards = await Axios.get(
    // `https://my-json-server.typicode.com/alongvili/psu/Dashboards`
    `https://raw.githubusercontent.com/AlonGvili/psu/master/db.json`
  ).then((res) => res.data);

  // let results = JSON.parse(dashboards)
  dashboards.Dashboards.forEach((dashboard: Dashboard) => {
    queryCache.setQueryData(
      ["dashboard", { dashboardId: dashboard.id }],
      dashboard
    );
  });

  return dashboards.Dashboards;
}

export function useDashboards() {
  return useQuery("dashboards", fetchDashboards, {
    onError: (error: AxiosError) => error,
    suspense: true,
  });
}

export async function fetchRoles(): Promise<Role[]> {
  const roles = await Axios.get(
    `https://raw.githubusercontent.com/AlonGvili/psu/master/db.json`
  ).then((res) => res.data);

  // let results = JSON.parse(roles);
  roles.Roles.forEach((role: Role) => {
    queryCache.setQueryData(["role", { roleId: role.id }], role);
  });

  return roles.Roles;
}

export function useRoles() {
  return useQuery("roles", fetchRoles);
}

const statusToName = {
  0: "Stopped",
  1: "Running",
  3: "Debug",
  4: "Feedback",
};

export default function DashboardsOverview() {
  const { data } = useDashboards();
  const [filterValue, setFilterValue] = useState<Dashboard[] | undefined>(
    () => {
      return data?.map((dashboard) => {
        return Object.defineProperty(dashboard, "statusName", {
          value: statusToName[dashboard.status],
          writable: true,
        });
      });
    }
  );
  const [layout, setLayout] = useState("grid_layout");
  const [isOpen, setIsOpen] = useState(false);

  const [searchForm] = Form.useForm();
  const [layoutForm] = Form.useForm();

  function onSearch(value) {
    if (value === undefined || value === "") {
      setFilterValue(data);
    } else {
      let results: Dashboard[] = appSearch(
        "id",
        [
          "name",
          "role",
          "statusName",
          "filePath",
          "baseUrl",
          "environment",
          ["dashboardFramework", "name"],
          ["dashboardFramework", "version"],
        ],
        data,
        value
      );
      console.log("results", results);
      setFilterValue(results);
    }
  }

  function onLayoutChnage(changedValues: any, values: any) {
    setLayout(changedValues.layout);
  }

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card bordered={false}>
            <Space style={{ justifyContent: "space-between", width: "100%" }}>
              <Space>
                <Form
                  colon={false}
                  name="search_dashboard"
                  layout="inline"
                  form={searchForm}
                >
                  <Form.Item>
                    <Typography style={{ marginBottom: 0 }}>
                      <Typography.Title
                        level={5}
                        style={{
                          marginBottom: 0,
                          fontSize: 20,
                          fontVariant: "all-small-caps",
                          fontFamily: "SFProDisplay-Black",
                        }}
                      >
                        Dashboards
                      </Typography.Title>
                    </Typography>
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="search" noStyle>
                      <Input
                        placeholder="Search for a dashboards"
                        bordered={false}
                        allowClear
                        onChange={(event) => onSearch(event.target.value)}
                      />
                    </Form.Item>
                  </Form.Item>
                </Form>
              </Space>

              <Space size="large">
                <Button
                  type="primary"
                  style={{ fontFamily: "SFProDisplay-Regular" }}
                  onClick={() => setIsOpen(true)}
                >
                  Create New Dashboard
                </Button>
                <Form
                  name="layout_form"
                  layout="inline"
                  form={layoutForm}
                  onValuesChange={onLayoutChnage}
                >
                  <Form.Item name="layout">
                    <Radio.Group buttonStyle="solid" defaultValue="grid_layout">
                      <Tooltip title="Table layout">
                        <Radio.Button
                          value="table_layout"
                          style={{ border: "none" }}
                        >
                          <TableOutlined />
                        </Radio.Button>
                      </Tooltip>
                      <Tooltip title="Grid layout">
                        <Radio.Button
                          value="grid_layout"
                          style={{ border: "none" }}
                        >
                          <AppstoreOutlined />
                        </Radio.Button>
                      </Tooltip>
                    </Radio.Group>
                  </Form.Item>
                </Form>
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {layout === "grid_layout" ? (
          filterValue?.map((dashboard, index) => {
            return (
              <Col
                key={index}
                lg={{ span: 6 }}
                md={{ span: 12 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
              >
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
                            {`PowerShell ${dashboard.environment}`}
                          </Space>
                          <Space>
                            <AppstoreAddOutlined />
                            {`${dashboard.dashboardFramework?.name} ${dashboard.dashboardFramework?.version}`}
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
                    <Button.Group style={{ marginLeft: "-4px" }} size="small">
                      <Popconfirm
                        style={{
                          fontFamily: "SFProDisplay-Regular",
                        }}
                        title={
                          <Typography
                            style={{ fontFamily: "SFProDisplay-Regular" }}
                          >
                            Delete this dashboard ?
                          </Typography>
                        }
                        icon={
                          <DeleteOutlined
                            style={{ color: presetPrimaryColors["red"] }}
                          />
                        }
                        okButtonProps={{
                          danger: true,
                          style: {
                            fontFamily: "SFProDisplay-Regular",
                          },
                        }}
                        cancelButtonProps={{
                          style: {
                            fontFamily: "SFProDisplay-Regular",
                          },
                        }}
                        okText="Delete"
                        placement="topLeft"
                        arrowPointAtCenter
                        autoAdjustOverflow
                      >
                        <Tooltip title="Delete" color="red">
                          <Button
                            icon={
                              <Typography.Text
                                type="secondary"
                                style={{ fontSize: 14 }}
                              >
                                <DeleteOutlined />
                              </Typography.Text>
                            }
                            type="text"
                          />
                        </Tooltip>
                      </Popconfirm>
                      <Tooltip title="Info">
                        <Button
                          icon={
                            <Typography.Text
                              type="secondary"
                              style={{ fontSize: 14 }}
                            >
                              <InfoCircleOutlined />
                            </Typography.Text>
                          }
                          type="text"
                        />
                      </Tooltip>
                      <Tooltip title="View">
                        <Button
                          icon={
                            <Typography.Text
                              type="secondary"
                              style={{ fontSize: 14 }}
                            >
                              <GlobalOutlined />
                            </Typography.Text>
                          }
                          type="text"
                        />
                      </Tooltip>
                    </Button.Group>
                    <Button.Group size="small">
                      <Button
                        icon={setPowerIconColor(dashboard.status)}
                        type="text"
                      />
                    </Button.Group>
                  </Space>
                </Card>
              </Col>
            );
          })
        ) : (
          <PSUTable data={filterValue} />
        )}
      </Row>
      <UpdateModal
        isImportModal={false}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
