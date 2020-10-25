import React from "react";
import { Card, Typography, Space } from "antd";
import { capitalize, setPowerIconColor } from "utilities/utils";
import { Dashboard } from "types";
import { Button } from "antd/es";
import {
  AppstoreAddOutlined,
  GlobalOutlined,
  LeftCircleFilled,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import useDrawerProvider from "context/drawer/Hooks";
import DashboardStats from "components/DashboardStats"

export default function DashboardInfo(props: {
  dashboard: Dashboard | undefined;
}) {
  const { dashboard } = props;
  const history = useHistory();
  const [, dispatch] = useDrawerProvider();

  let ViewButton = (props) => (
    <Button {...props} icon={<GlobalOutlined />} type="text" />
  );

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
        <DashboardStats />

        <Button.Group>
          <Button
            icon={<AppstoreAddOutlined />}
            type="text"
            onClick={() => dispatch({ type: "OPEN" })}
          />
          <Link
            to={`${dashboard?.baseUrl}`}
            component={ViewButton}
            style={{ color: "inherit" }}
          />
          <Button icon={setPowerIconColor(dashboard?.status)} type="text" />
        </Button.Group>
      </Typography>
    </Card>
  );
}
