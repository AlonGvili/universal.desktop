import React from "react";
import { Table } from "antd/es";
import { Dashboard } from "../types";
import { ColumnProps } from "antd/lib/table";
import { Card, Col } from "antd";

export default function PSUTable(props: { data: Dashboard[] | undefined }) {
  const columns: ColumnProps<Dashboard>[] = [
    {
      title: "Name",
      dataIndex: "name",
      width: "20%",
    },
    {
      title: "Url",
      width: "25%",
      dataIndex: "baseUrl",
    },
    {
      title: "File",
      width: "25%",
      dataIndex: "filePath",
    },
    {
      title: "Process",
      width: "10%",
      dataIndex: "process",
      render: (text, row) => `${row.processName} [${row.processId}]`,
    },
    {
      title: "Environment",
      width: "min-content",
      align: "center",
      dataIndex: "environment",
    },
    {
      title: "Role",
      dataIndex: "role",
      width: "min-content",
    },
    {
      title: "Framework",
      dataIndex: "dashboardFramework",
      width: "10%",
      render: (text, row) =>
        `${row.dashboardFramework?.name} [${row.dashboardFramework?.version}]`,
    },
  ];
  return (
    <Col span={24}>
      <Table
        bordered={false}
        dataSource={props.data}
        columns={columns}
        style={{ width: "100%" }}
      />
    </Col>
  );
}
