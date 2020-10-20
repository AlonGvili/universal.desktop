/* eslint-disable array-callback-return */
import { useState } from "react";
import { useDashboard, useUpdateDashboard } from "../service-hooks";
import { useParams } from "react-router";
import { CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Table, Tag, Drawer, Button, Row, Col, Card, Form, Input } from "antd";
import React from "react";
import type { ColumnProps } from "antd/es/table";
import { DashboardComponent } from "../types";
import ComponentsInfo from "./ComponentsInfo";
import useDrawerProvider from "../context/drawer/Hooks";
import { useSearch } from "../utilities/utils";
import { Space, Typography } from "antd/es";
import { queryCache } from "react-query";

export default function ComponentsDrawer() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const id = Number.parseInt(useParams<{ id: string }>().id);
  const dashboard = useDashboard(id);
  const data = queryCache.getQueryData<DashboardComponent[]>("components");
  const { values, search } = useSearch<DashboardComponent>(
    "id",
    ["name", "version"],
    data
  );
  const [updateDashboard, updateDashboardInfo] = useUpdateDashboard();
  const [selectedComponents, setSelectedComponents] = useState<
    DashboardComponent[]
  >([]);
  const [{ isVisible }, dispatch] = useDrawerProvider();

  const [searchForm] = Form.useForm();

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
        return dashboard.data?.dashboardComponents?.some(
          (component) => component.id === record.id
        ) ? (
          <Tag icon={<CheckCircleOutlined />} color="success">
            Added
          </Tag>
        ) : (
          <Tag icon={<MinusCircleOutlined />} color="default">
            Not added
          </Tag>
        );
      },
    },
  ];

  const rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      let toInstall: any[] = [];
      if (
        null === dashboard.data?.dashboardComponents ||
        dashboard.data?.dashboardComponents?.length === 0
      ) {
        setSelectedComponents(selectedRows);
      } else {
        selectedRows.map((row: DashboardComponent) => {
          if (
            dashboard.data?.dashboardComponents?.some(
              (install) => install.id !== row.id
            )
          ) {
            toInstall.push(row);
          }
        });
      }
      setSelectedComponents([
        dashboard.data?.dashboardComponents,
        ...toInstall,
      ]);
    },
    getCheckboxProps: (record) => ({
      disabled: dashboard.data?.dashboardComponents?.some(
        (install) => install.id === record.id
      ),
      name: record.name,
    }),
  };

  return (
    <Drawer
      title="Add Components"
      visible={isVisible}
      closable
      width={600}
      onClose={() => dispatch({ type: "CLOSE" })}
    >
      <Space direction="vertical" size={48} style={{ width: "100%" }}>
        <ComponentsInfo />
        <Space direction="vertical" style={{ width: "100%" }}>
          <Row gutter={[16, 16]}>
            <Col flex={1}>
              <Card bordered={false} bodyStyle={{ backgroundColor: "#272727" }}>
                <Row gutter={16}>
                  <Col flex={1}>
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
                        <Form.Item name="search">
                          <Input
                            placeholder="Search for a components"
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
                  <Col>
                    <Button
                      type="primary"
                      loading={updateDashboardInfo.isLoading}
                      disabled={
                        data?.length ===
                        dashboard.data?.dashboardComponents?.length
                      }
                      onClick={() => {
                        updateDashboard({
                          ...dashboard.data,
                          dashboardComponents: selectedComponents,
                        });
                        setSelectedRowKeys([]);
                      }}
                    >
                      Add To Dashboard
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Table
            rowKey={(record: DashboardComponent) => record.id}
            columns={componentsColumns}
            dataSource={values}
            rowSelection={{ ...rowSelection }}
            pagination={{
              hideOnSinglePage: true,
              defaultPageSize: 6,
            }}
          />
        </Space>
      </Space>
    </Drawer>
  );
}
