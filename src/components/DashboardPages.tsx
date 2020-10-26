import React, { lazy, useState } from "react";
import { Card } from "antd";
import { Button } from "antd/es";
import useContentProvider from "context/content/Hooks";
import { PicCenterOutlined, PicRightOutlined } from "@ant-design/icons";
import Loader from "./Loader";

const DashboardSettings = lazy(() => import( /* webpackChunkName: 'DashboardSettings' */"./DashboardSettings"));
const DashboardComponents = lazy(() => import( /* webpackChunkName: 'DashboardComponents' */"./DashboardComponents"));
const DashboardSessions = lazy(() => import( /* webpackChunkName: 'DashboardSessions' */"./DashboardSessions"));
const DashboardEndpoints = lazy(() => import( /* webpackChunkName: 'DashboardEndpoints' */"./DashboardEndpoints"));

export default function DashboardPages() {
  const [currentTab, setCurrentTab] = useState("settings");

  const [{ right }, dispatch] = useContentProvider();
  const tabs = [
    {
      key: "settings",
      tab: "Settings",
    },
    {
      key: "endpoints",
      tab: "Endpoints",
    },
    {
      key: "sessions",
      tab: "Sessions",
    },
    {
      key: "output",
      tab: "Output",
    },
    {
      key: "components",
      tab: "Components",
    },
  ];

  const tabsPanels = {
    settings: <DashboardSettings />,
    endpoints: <DashboardEndpoints />,
    sessions: <DashboardSessions />,
    output: "output",
    components: <DashboardComponents />,
  };

  return (
    <Card
      bordered={false}
      headStyle={{ borderBottom: 0, height: 64 }}
      bodyStyle={{ paddingTop: 24 }}
      style={{ height: "100vh" }}
      tabList={tabs}
      tabBarExtraContent={
        <Button
          type="text"
          icon={right.isExpanded ? <PicRightOutlined /> : <PicCenterOutlined />}
          onClick={() =>
            dispatch({
              type: right.isExpanded ? "RESET" : "EXPAND_RIGHT",
            })
          }
        />
      }
      tabProps={{
        type: "line",
        tabBarStyle: { height: 64 },
      }}
      onTabChange={(key) => setCurrentTab(key)}
    >
      <Loader>{tabsPanels[currentTab]}</Loader>
    </Card>
  );
}
