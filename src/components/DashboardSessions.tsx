/* eslint-disable array-callback-return */
import React from "react";
import { useDashboardDiagnostics } from "../service-hooks";
import { useParams } from "react-router-dom";
import {
  Table,
  Row,
  Col,
  Card,
  Form,
  Input,
  Space,
  Typography,
  List,
} from "antd";
import type { ColumnProps } from "antd/es/table";
import { Dashboard, DashboardEndpoint, DashboardSession } from "../types";
import { useSearch } from "../utilities/utils";
import { queryCache } from "react-query";
import dayjs from "dayjs";

function renderColumn<T>(value: keyof T, copyable?: boolean) {
  return (
    <Typography.Text
      style={{
        fontFamily: "SFProDisplay-Regular",
        fontSize: 14,
      }}
      copyable={copyable}
    >
      {value}
    </Typography.Text>
  );
}

export default function DashboardSessions() {
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
  const { values, search } = useSearch<DashboardSession>(
    "id",
    ["id", "userName", "lastTouched", ["endpoints", "id"]],
    diagnostics?.sessions
  );

  const [searchForm] = Form.useForm();

  const columns: ColumnProps<DashboardSession>[] = [
    {
      dataIndex: "id",
      title: "Id",
      render: (_, record) => renderColumn(record.id, true),
    },
    {
      dataIndex: "userName",
      title: "UserName",
      align: "center",
      render: (_, record) => renderColumn(record.userName),
    },
    {
      dataIndex: "lastTouched",
      title: "LastTouched",
      align: "center",
      render: (_, record) =>
        renderColumn(dayjs(record.lastTouched).format("YYYY-MM-DD HH:mm")),
    },
    {
      dataIndex: "endpoints",
      title: "Endpoints",
      align: "right",
      render: (_, record) =>
        renderColumn<DashboardEndpoint[]>(record.endpoints?.length || 0),
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
                    placeholder="Search for a session"
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
        rowKey={(record: DashboardSession) => record.id}
        columns={columns}
        dataSource={values}
        expandable={{
          expandedRowRender: (record) => {
            return (
              <List
                size="default"
                dataSource={record.endpoints}
                renderItem={(item) => {
                  return (
                    <List.Item style={{ padding: 12, paddingLeft: 48, paddingRight: 0 }}>
                      <List.Item.Meta title={renderColumn(item.id, true)} />
                      <Space style={{ padding: 0, margin: 0}}>
                        {renderColumn(`Average Execution Time:`)}
                        {renderColumn(`${item.averageExecutionTime}`)}
                      </Space>
                    </List.Item>
                  );
                }}
              />
            );
          },
        }}
        pagination={{
          hideOnSinglePage: true,
        }}
      />
    </Space>
  );
}
