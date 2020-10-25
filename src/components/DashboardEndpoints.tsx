/* eslint-disable array-callback-return */
import React from "react";
import { useDashboardDiagnostics } from "../service-hooks";
import { useParams } from "react-router-dom";
import { Table, Row, Col, Card, Form, Input, Space, Typography } from "antd";
import type { ColumnProps } from "antd/es/table";
import { Dashboard, DashboardEndpoint } from "../types";
import { useSearch } from "../utilities/utils";
import { queryCache } from "react-query";


function renderColumn<T = string | number | any>(value: keyof T) {
  return (
    <Typography.Text
      style={{
        fontFamily: "SFProDisplay-Regular",
        fontSize: 14,
      }}
    >
      {value}
    </Typography.Text>
  );
}

export default function DashboardEndpoints() {
  const params = useParams<{ id: string }>();
  const id = Number.parseInt(params.id);
  const dashboard = queryCache.getQueryData<Dashboard>([
    "dashboard",
    { dashboardId: id },
  ]);
  const { data: diagnostics } = useDashboardDiagnostics(
    id,
    dashboard?.status === 1
  );
  const { values, search } = useSearch<DashboardEndpoint>(
    "id",
    ["id", "averageExecutionTime"],
    diagnostics?.endpoints
  );

  const [searchForm] = Form.useForm();

  const columns: ColumnProps<DashboardEndpoint>[] = [
    {
      dataIndex: "id",
      title: "Id",
      render: (_, record) => renderColumn(record.id),
    },
    {
      dataIndex: "averageExecutionTime",
      title: "Average Execution Time",
      align: "right",
      render: (_, record) => renderColumn(record?.averageExecutionTime),
    },
  ];

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Card
        bordered={false}
        bodyStyle={{ backgroundColor: "#272727", padding: 12 }}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Typography.Text
              style={{
                fontFamily: "SFProDisplay-Regular",
                fontSize: 20,
                lineHeight: "28px",
              }}
            >
              <Form
                colon={false}
                name="search_components"
                layout="inline"
                form={searchForm}
              >
                <Form.Item name="search" style={{ width: "100%" }}>
                  <Input
                    placeholder="Search for a endpoint"
                    bordered={false}
                    style={{
                      paddingLeft: 0,
                      fontFamily: "SFProDisplay-Regular",
                      fontSize: "inherit",
                    }}
                    allowClear
                    onChange={(event) => search(event.target.value)}
                  />
                </Form.Item>
              </Form>
            </Typography.Text>
          </Col>
        </Row>
      </Card>
      <Table
        rowKey={(record: DashboardEndpoint) => record.id}
        columns={columns}
        dataSource={values}
        pagination={{
          hideOnSinglePage: true,
        }}
      />
    </Space>
  );
}
