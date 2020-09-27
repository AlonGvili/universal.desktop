import React, { useState } from "react";
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
  Grid,
} from "antd/es";
import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  CodeOutlined,
  DeleteFilled,
  EditFilled,
  TableOutlined,
} from "@ant-design/icons";

import CardHeader from "components/card/TitleAndDescription";
import BodyLink from "components/card/BodyLink";
import InfoSection from "components/card/InfoSection";
import { Divider, Radio, Select, Tooltip } from "antd";
import { setPowerIconColor } from "utilities/utils";
// import { useDebounce } from "ahooks";
import { SelectValue } from "antd/lib/select";
import PSUTable from "components/Table";

// const byteSize = require("byte-size");
// const url = `http://localhost:5000/api/v1`;

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

// const { useBreakpoint } = Grid;

export default function DashboardsOverview() {
  // const breakpoint = useBreakpoint();
  const { data } = useDashboards();
  const [filterValue, setFilterValue] = useState<Dashboard[] | undefined>(data);
  const [layout, setLayout] = useState("table_layout");

  const [searchForm] = Form.useForm();
  const [filterForm] = Form.useForm();
  const [layoutForm] = Form.useForm();

  function onFilterChnage(value: SelectValue) {
    if (value === undefined) {
      setFilterValue(data);
    } else {
      setFilterValue(data?.filter((dashboard) => dashboard.status === value));
    }
  }

  const statusToName = {
    0: "Stopped",
    1: "Running",
    3: "Debug",
    4: "Feedback",
  };

  function onSearch(value) {
    if (value === undefined) {
      setFilterValue(data);
    } else {
      setFilterValue(() =>
        data?.filter((dashboard) => {
          return (
            dashboard.name?.includes(value) ||
            dashboard.baseUrl?.includes(value) ||
            dashboard.dashboardFramework?.name?.includes(value) ||
            dashboard.dashboardFramework?.version?.includes(value) ||
            dashboard.powerShellVersion?.version?.includes(value) ||
            statusToName[dashboard.status] === value
          );
        })
      );
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
                      <Typography.Title level={5} style={{ marginBottom: 0 }}>
                        Search and Filter
                      </Typography.Title>
                    </Typography>
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="search" noStyle>
                      <Input.Search
                        placeholder="Search for a dashboards"
                        bordered={false}
                        allowClear
                        onChange={(event) => onSearch(event.target.value)}
                      />
                    </Form.Item>
                  </Form.Item>
                </Form>

                <Form
                  name="filte_dashboard"
                  colon={false}
                  layout="inline"
                  form={filterForm}
                >
                  <Form.Item name="filter_by_status">
                    <Select
                      placeholder="Filter By Status"
                      bordered={false}
                      allowClear={true}
                      dropdownMatchSelectWidth={true}
                      onChange={onFilterChnage}
                    >
                      <Select.Option key={0} value={0}>
                        Stopped
                      </Select.Option>
                      <Select.Option key={1} value={1}>
                        Running
                      </Select.Option>
                      <Select.Option key={3} value={3}>
                        Debug
                      </Select.Option>
                      <Select.Option key={4} value={4}>
                        Feedback
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Form>
              </Space>

              <Form
                name="layout_form"
                layout="inline"
                form={layoutForm}
                onValuesChange={onLayoutChnage}
              >
                <Form.Item name="layout">
                  <Radio.Group buttonStyle="solid" defaultValue="table_layout">
                    <Tooltip title="Table layout">
                      <Radio.Button value="table_layout">
                        <TableOutlined />
                      </Radio.Button>
                    </Tooltip>
                    <Tooltip title="Grid layout">
                      <Radio.Button value="grid_layout">
                        <AppstoreOutlined />
                      </Radio.Button>
                    </Tooltip>
                  </Radio.Group>
                </Form.Item>
              </Form>
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
                            {`PowerShell ${dashboard.powerShellVersion}`}
                          </Space>
                          <Space>
                            <AppstoreAddOutlined />
                            {`${dashboard.dashboardFramework?.name} ${dashboard.dashboardFramework.version}`}
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
    </>
  );
}
