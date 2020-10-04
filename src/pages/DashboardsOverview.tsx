import React, { lazy, useState } from "react";
import { Dashboard } from "types";
import {
  Form,
  Input,
  Button,
  Typography,
  Row,
  Col,
  Space,
  Card,
  Radio,
  Tooltip,
} from "antd";
import { AppstoreOutlined, TableOutlined } from "@ant-design/icons";
import { appSearch } from "utilities/utils";
import { useDashboards } from "service-hooks";
const NewDashboardModal = lazy(
  () =>
    import(
      /* webpackChunkName: 'NewDashboardModal' */ "components/NewDashboardModal"
    )
);
const PSUTable = lazy(
  () => import(/* webpackChunkName: 'PSUTable' */ "components/Table")
);
const DashboardCard = lazy(
  () => import(/* webpackChunkName: 'DashboardCard' */ "components/card/Card")
);

const statusToName = {
  0: "Stopped",
  1: "Running",
  3: "Debug",
  4: "Feedback",
};

export default function DashboardsOverview() {
  const { data } = useDashboards();
  console.log("data",data)
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

  function onSearch(value: string) {
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
      setFilterValue(results);
    }
  }

  function onLayoutChnage(changedValues: any) {
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
                <DashboardCard dashboard={dashboard} />
              </Col>
            );
          })
        ) : (
          <PSUTable data={filterValue} />
        )}
      </Row>
      <NewDashboardModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
