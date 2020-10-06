import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { queryCache } from "react-query";
import { Dashboard } from "types";
import Loader from "components/Loader";
import { Card, Col, Row, Space, Typography } from "antd";
import { capitalize } from "utilities/utils";
import Editor from "components/Editor";
import { editor } from "monaco-editor";
import { useSize } from "ahooks";
import DashboardSettings from "components/DashboardSettings";

export default function DashboardPage() {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  const ref = useRef<HTMLDivElement>(null);
  const size = useSize(ref);
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const [currentTab, setCurrentTab] = useState("settings");

  const dashboard: Dashboard | undefined = queryCache.getQueryData<Dashboard>([
    "dashboard",
    { dashboardId: id },
  ]);

  useEffect(() => editorRef.current?.layout(), [size.width]);

  const tabs = [
    {
      key: "settings",
      tab: "Settings",
    },
    {
      key: "log",
      tab: "Log"
    },
  ];

  const tabsPanels = {
    settings: <DashboardSettings dashboard={dashboard} />,
  };

  return (
    <Loader tip={`Loading Dashboard ${dashboard?.id}...`} spinning>
      <div ref={ref} style={{ height: "100%" }}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Card bordered={false}>
              <Typography
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "SFProDisplay-Semibold",
                }}
              >
                <Space>
                  {capitalize(dashboard?.name)}
                  <Typography.Text
                    style={{ fontFamily: "SFProDisplay-Regular" }}
                    type="secondary"
                  >{`#${dashboard?.id}`}</Typography.Text>
                </Space>
              </Typography>
            </Card>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={15} style={{ height: "100%" }}>
            <Card bordered={false} bodyStyle={{ padding: 0 }}>
              <Editor
                data={dashboard || ({} as Dashboard)}
                editorProps={{
                  theme: "dark",
                  value: dashboard?.content,
                  options: {
                    wordWrap: "bounded",
                    wrappingIndent: "indent",
                    minimap: {
                      enabled: false,
                    },
                  },
                  height: "90vh",
                }}
                ref={editorRef}
              />
            </Card>
          </Col>
          <Col span={9} style={{ minHeight: "100%" }}>
            
            <Card
              bordered={false}
              headStyle={{ border: "none" }}
              style={{ height: "100%" }}
              tabList={tabs}
              tabProps={{
                type: "line",
                tabBarStyle: { borderColor: "none" },
              }}
              onTabChange={(key) => setCurrentTab(key)}
            >
              {tabsPanels[currentTab]}
            </Card>
          </Col>
        </Row>
      </div>
    </Loader>
  );
}

DashboardPage.displayName = "DashboardPage";
