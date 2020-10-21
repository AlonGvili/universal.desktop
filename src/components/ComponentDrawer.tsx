/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { useDashboard, useUpdateDashboard } from "../service-hooks";
import { useParams } from "react-router-dom";
import { CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import {
  Table,
  Tag,
  Drawer,
  Button,
  Row,
  Col,
  Card,
  Form,
  Input,
  Space,
  Typography,
} from "antd";
import type { ColumnProps } from "antd/es/table";
import { Module } from "../types";
import ComponentsInfo from "./ComponentsInfo";
import useDrawerProvider from "../context/drawer/Hooks";
import { useSearch } from "../utilities/utils";
import { queryCache } from "react-query";

function renderColumn<T>(value: keyof T) {
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

export default function ComponentsDrawer() {
  const params = useParams<{ id: string }>();
  const id = Number.parseInt(params.id);
  const { data: dashboard } = useDashboard(id);
  const [update, { isLoading }] = useUpdateDashboard();
  const components = queryCache.getQueryData<Module[]>("components");
  const { values, search } = useSearch<Module>(
    "id",
    ["name", "version"],
    components
  );
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedComponents, setSelectedComponents] = useState<Module[]>([]);
  const [{ isVisible }, dispatch] = useDrawerProvider();

  const [searchForm] = Form.useForm();

  function onChange(selectedRowKeys, selectedRows) {
    const modules = dashboard?.dashboardComponents;
    setSelectedRowKeys(selectedRowKeys);
    let toInstall: any[] = [];
    if (!modules || modules === (null || undefined)) {
      setSelectedComponents(selectedRows);
    } else {
      selectedRows.map((row: Module) => {
        if (modules?.some((install) => install.id !== row.id)) {
          toInstall.push(row);
        }
      });
    }
    setSelectedComponents([modules, ...toInstall]);
  }

  function getCheckBoxProps(record: Module) {
    const modules = dashboard?.dashboardComponents;
    return {
      disabled: modules?.some((install) => install.id === record.id),
      name: record.name,
    };
  }

  const columns: ColumnProps<Module>[] = [
    {
      dataIndex: "name",
      title: "Name",
      render: (_, record) => renderColumn(record.name),
    },
    {
      dataIndex: "version",
      title: "Version",
      align: "center",
      render: (_, record) => renderColumn(record.version),
    },
    {
      dataIndex: "actions",
      align: "right",
      render: (_, record) => {
        return dashboard?.dashboardComponents?.some(
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
    onChange: onChange,
    getCheckboxProps: getCheckBoxProps,
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
                      loading={isLoading}
                      disabled={
                        components?.length ===
                        dashboard?.dashboardComponents?.length
                      }
                      onClick={() => {
                        update({
                          ...dashboard,
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
            rowKey={(record: Module) => record.id}
            columns={columns}
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
