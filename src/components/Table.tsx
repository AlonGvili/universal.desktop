import React from "react";
import { Table } from "antd/es";
import { Dashboard } from "../types";
import { ColumnProps } from "antd/lib/table";
import { Button, Col, Divider, Space, Tooltip, Typography } from "antd";
import { GlobalOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { queryCache } from "react-query";
import { Link } from "react-router-dom";
import { capitalize, setAuthIcon, setPowerIconColor } from "utilities/utils";

export default function PSUTable(props: { data: Dashboard[] | undefined }) {
  const columns: ColumnProps<Dashboard>[] = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, row) => (
        <Typography style={{ fontFamily: "SFProDisplay-Semibold" }}>
          {capitalize(row.name)}
        </Typography>
      ),
    },
    {
      title: "Url",
      dataIndex: "baseUrl",
      render: (_, row) => (
        <Typography style={{ fontFamily: "SFProDisplay-Regular" }}>
          {row.baseUrl}
        </Typography>
      ),
    },
    {
      title: "File",
      dataIndex: "filePath",
      render: (_, row) => (
        <Typography style={{ fontFamily: "SFProDisplay-Regular" }}>
          {row.filePath}
        </Typography>
      ),
    },
    {
      title: "Process",
      dataIndex: "process",
      render: (_, row) => (
        <Typography style={{ fontFamily: "SFProDisplay-Regular" }}>
          { row.processId !== undefined && `${row.processName} [ ${row.processId} ]`}
        </Typography>
      ),
    },
    {
      title: "Environment",
      width: "min-content",
      align: "center",
      dataIndex: "environment",
      render: (_, row) => (
        <Typography style={{ fontFamily: "SFProDisplay-Regular" }}>
          {row.environment}
        </Typography>
      ),
    },
    {
      title: "Auth",
      dataIndex: "authenticated",
      align: "center",
      width: "min-content",
      render: (_, row) => setAuthIcon(row.authenticated),
    },
    {
      title: "Role",
      dataIndex: "role",
      width: "min-content",
      render: (_, row) => (
        <Typography style={{ fontFamily: "SFProDisplay-Regular" }}>
          {capitalize(row.role)}
        </Typography>
      ),
    },
    {
      title: "Framework",
      rowSpan: 2,
      dataIndex: "dashboardFramework",
      render: (text, row) => (
        <Typography style={{ fontFamily: "SFProDisplay-Regular" }}>
          {capitalize(
            `${row.dashboardFramework?.name} [ ${row.dashboardFramework?.version} ]`
          )}
        </Typography>
      ),
    },
    {
      dataIndex: "option",
      // width: "5%",
      render: (text, row: Dashboard) => {
        return (
          <Space align="center" size="small">
            <Button icon={setPowerIconColor(row.status)} type="text" />
            <Divider orientation="center" type="vertical" />
            <Tooltip title={"View"}>
              <Button
                href={`${row.baseUrl}`}
                target="_blank"
                type="text"
                icon={<GlobalOutlined />}
                onClick={() =>
                  setTimeout(() => {
                    queryCache.invalidateQueries([
                      "diagnostics",
                      "totalSessions",
                    ]);
                  }, 7000)
                }
              />
            </Tooltip>
            <Divider orientation="center" type="vertical" />
            <Tooltip title={"Info"}>
              <Link to={`/dashboards/${row.id}`}>
                <Button type="text" icon={<InfoCircleOutlined />} />
              </Link>
            </Tooltip>
            <Divider orientation="center" type="vertical" />
            {/* <DeleteButton id={row.id} /> */}
          </Space>
        );
      },
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
