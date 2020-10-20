import React, { useState } from "react";
import { Card } from "antd";
import DashboardSettings from "./DashboardSettings";
import DashboardComponents from "./DashboardComponents";
import { Dashboard } from "types";
import { Button } from "antd/es";
import useContentProvider from "context/content/Hooks";
import { PicCenterOutlined, PicRightOutlined } from "@ant-design/icons";

export default function DashboardPages(props: {
  dashboard: Dashboard | undefined;
}) {
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
    endpoints: "endpoints",
    sessions: "sessions",
    output: "output",
    components: <DashboardComponents />,
  };

  return (
    <Card
      bordered={false}
      headStyle={{ borderBottom: 0, height: 64 }}
      bodyStyle={{ paddingTop: 24 }}
      style={{ height: "100%" }}
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
      {tabsPanels[currentTab]}
    </Card>
  );
}
