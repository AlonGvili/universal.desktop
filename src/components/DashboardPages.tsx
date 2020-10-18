import React, { useState } from "react";
import { Card } from "antd";
import DashboardSettings from "./DashboardSettings";
import DashboardLog from "./DashboardLog";
import { Dashboard } from "types";
import { Button } from "antd/es";
import useContentProvider from "context/content/Hooks";
import { PicCenterOutlined, PicRightOutlined } from "@ant-design/icons";

export default function DashboardPages(props: {
  dashboard: Dashboard | undefined;
}) {
  const { dashboard } = props;
  const [currentTab, setCurrentTab] = useState("settings");

  const [{ right }, dispatch] = useContentProvider();
  const tabs = [
    {
      key: "settings",
      tab: "Settings",
    },
    {
      key: "log",
      tab: "Log",
    },
  ];

  const tabsPanels = {
    settings: <DashboardSettings dashboard={dashboard} />,
    log: <DashboardLog />,
  };
  return (
    <Card
      bordered={false}
      headStyle={{ borderBottom: 0, height: 64 }}
      bodyStyle={{ paddingTop: 0 }}
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
