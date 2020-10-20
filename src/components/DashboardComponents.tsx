import { useDashboard, useUpdateDashboard } from "../service-hooks";
import { useParams } from "react-router";
import { Table, Button, Popconfirm } from "antd";
import React from "react";
import type { ColumnProps } from "antd/es/table";
import { DashboardComponent } from "../types";
import { Typography } from "antd/es";

export default function DashboardComponents() {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  const { data: dashboard } = useDashboard(id);
  const [updateDashboard] = useUpdateDashboard();
  const componentsColumns: ColumnProps<DashboardComponent>[] = [
    {
      dataIndex: "name",
      title: "Name",
      render: (_, record) => (
        <Typography.Text
          style={{ fontFamily: "SFProDisplay-Regular", fontSize: 14 }}
        >
          {record.name}
        </Typography.Text>
      ),
    },
    {
      dataIndex: "version",
      title: "Version",
      align: "center",
      render: (_, record) => (
        <Typography.Text
          style={{ fontFamily: "SFProDisplay-Regular", fontSize: 14 }}
        >
          {record.version}
        </Typography.Text>
      ),
    },
    {
      dataIndex: "actions",
      align: "right",
      render: (_, record) => {
        return (
          <Popconfirm
            okText="Remove"
            onConfirm={() => {
              let components = dashboard?.dashboardComponents?.filter(
                (component) => component.id !== record.id
              );
              updateDashboard({
                ...dashboard,
                dashboardComponents: components,
              });
            }}
            title="Remove this components"
          >
            <Button type="primary" danger={true}>
              Remove
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <Table
      rowKey={(record: DashboardComponent) => record.id}
      columns={componentsColumns}
      dataSource={dashboard?.dashboardComponents}
      pagination={{
        hideOnSinglePage: true,
      }}
    />
  );
}
