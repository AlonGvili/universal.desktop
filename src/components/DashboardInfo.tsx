import React from "react";
import { Card, Typography, Space } from "antd";
import { capitalize, setPowerIconColor } from "utilities/utils";
import { Dashboard } from "types";
import { Button } from "antd/es";
import {
  LeftOutlined,
  LeftCircleFilled,
  LeftCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function DashboardInfo(props: {
  dashboard: Dashboard | undefined;
}) {
  const { dashboard } = props;
  const history = useHistory();
  return (
    <Card bordered={false}>
      <Typography
        style={{
          fontSize: 20,
          fontWeight: 600,
          fontFamily: "SFProDisplay-Semibold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Space>
          <Button
            type="text"
            icon={<LeftCircleFilled />}
            onClick={() => history.goBack()}
          />
          {capitalize(dashboard?.name)}
          <Typography.Text
            style={{ fontFamily: "SFProDisplay-Regular", fontSize: 14 }}
            type="secondary"
          >{`#${dashboard?.id}`}</Typography.Text>
        </Space>
        <Button.Group>
          <Button icon={setPowerIconColor(dashboard?.status)} type="text" />
        </Button.Group>
      </Typography>
    </Card>
  );
}
