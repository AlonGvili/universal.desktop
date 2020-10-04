import { presetPrimaryColors } from "@ant-design/colors";
import {
    AppstoreAddOutlined,
    CodeOutlined,
    DeleteOutlined,
    GlobalOutlined,
    InfoCircleOutlined
} from "@ant-design/icons";
import {
    Button,
    Card,
    Divider,
    Popconfirm,
    Space,
    Tooltip,
    Typography
} from "antd";
import BodyLink from "components/card/BodyLink";
import InfoSection from "components/card/InfoSection";
import CardHeader from "components/card/TitleAndDescription";
import React from "react";
import { Link } from "react-router-dom";
import { Dashboard } from "types";
import { setPowerIconColor } from "utilities/utils";

export default function DashboardCard(props: { dashboard: Dashboard }) {
  const { dashboard } = props;
  return (
    <Card
      bodyStyle={{ padding: 24 }}
      bordered={false}
      style={{ minWidth: 280, height: "100%" }}
      headStyle={{ borderBottom: "unset" }}
      hoverable
    >
      <BodyLink id={dashboard.id}>
        {/* dashboard name and description */}

        <CardHeader name={dashboard.name} description={dashboard.description} />

        <Space direction="vertical" size="large">
          {/* dashboard information */}

          <InfoSection>
            <Space direction="vertical">
              <Space>
                <CodeOutlined />
                {`PowerShell ${dashboard.environment}`}
              </Space>
              <Space>
                <AppstoreAddOutlined />
                {`${dashboard.dashboardFramework?.name} ${dashboard.dashboardFramework?.version}`}
              </Space>
            </Space>
          </InfoSection>
        </Space>
      </BodyLink>
      <Divider style={{ width: "100%" }} type="horizontal" dashed plain />
      <Space style={{ justifyContent: "space-between", width: "100%" }}>
        <Button.Group style={{ marginLeft: "-4px" }} size="small">
          <Popconfirm
            style={{
              fontFamily: "SFProDisplay-Regular",
            }}
            title={
              <Typography style={{ fontFamily: "SFProDisplay-Regular" }}>
                Delete this dashboard ?
              </Typography>
            }
            icon={
              <DeleteOutlined style={{ color: presetPrimaryColors["red"] }} />
            }
            okButtonProps={{
              danger: true,
              style: {
                fontFamily: "SFProDisplay-Regular",
              },
            }}
            cancelButtonProps={{
              style: {
                fontFamily: "SFProDisplay-Regular",
              },
            }}
            okText="Delete"
            placement="topLeft"
            arrowPointAtCenter
            autoAdjustOverflow
          >
            <Tooltip title="Delete" color="red">
              <Button
                icon={
                  <Typography.Text type="secondary" style={{ fontSize: 14 }}>
                    <DeleteOutlined />
                  </Typography.Text>
                }
                type="text"
              />
            </Tooltip>
          </Popconfirm>
          <Tooltip title="Info">
            <Link to={`dashboards/${dashboard.id}`}>
              <Button
                icon={
                  <Typography.Text type="secondary" style={{ fontSize: 14 }}>
                    <InfoCircleOutlined />
                  </Typography.Text>
                }
                type="text"
              />
            </Link>
          </Tooltip>
          <Tooltip title="View">
            <Button
              icon={
                <Typography.Text type="secondary" style={{ fontSize: 14 }}>
                  <GlobalOutlined />
                </Typography.Text>
              }
              type="text"
            />
          </Tooltip>
        </Button.Group>
        <Button.Group size="small">
          <Button icon={setPowerIconColor(dashboard.status)} type="text" />
        </Button.Group>
      </Space>
    </Card>
  );
}

DashboardCard.displayName = "DashboardCard";
