import React from "react";
import Loader from "components/Loader";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { Col, Row, Typography } from "antd/es";
import Avatar from "antd/es/avatar/avatar";
import {
  IdcardOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

export default function SecurityOverview() {
  return (
    <Loader tip="Loading Security Overview..." spinning>
      <Row align="stretch" justify="space-around" gutter={24}>
        <Col span={6}>
          <Link to={`/security/roles/12`}>
            <Card
              bodyStyle={{ padding: 48 }}
              bordered={false}
              cover={
                <Avatar
                  icon={<LockOutlined style={{ fontSize: 64 }} />}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    paddingTop: 48,
                  }}
                />
              }
            >
              <Card.Meta
                style={{ textAlign: "center" }}
                title={
                  <Typography.Text
                    style={{
                      fontFamily: "SFProDisplay-Black",
                      fontSize: 20,
                      lineHeight: "28px",
                    }}
                  >
                    Authentication
                  </Typography.Text>
                }
                description={
                  <Typography.Text
                    style={{
                      fontFamily: "SFProDisplay-Regular",
                      lineHeight: "20px",
                      fontSize: 14,
                    }}
                  >
                    By default, the forms authentication script is configured to
                    accept the user Admin and any password. You can configure
                    this authentication policy to interact with whatever system
                    you like.
                  </Typography.Text>
                }
              />
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link to={`/security/roles/12`}>
            <Card
              bodyStyle={{ padding: 48 }}
              bordered={false}
              cover={
                <Avatar
                  icon={<IdcardOutlined  style={{ fontSize: 64 }} />}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    paddingTop: 48,
                  }}
                />
              }
            >
              <Card.Meta
                style={{ textAlign: "center" }}
                title={
                  <Typography.Text
                    style={{
                      fontFamily: "SFProDisplay-Black",
                      fontSize: 20,
                      lineHeight: "28px",
                    }}
                  >
                    Identities
                  </Typography.Text>
                }
                description={
                  <Typography.Text
                    style={{
                      fontFamily: "SFProDisplay-Regular",
                      lineHeight: "20px",
                      fontSize: 14,
                    }}
                  >
                    By default, the forms authentication script is configured to
                    accept the user Admin and any password. You can configure
                    this authentication policy to interact with whatever system
                    you like.
                  </Typography.Text>
                }
              />
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link to={`/security/roles`}>
            <Card
              bodyStyle={{ padding: 48 }}
              bordered={false}
              cover={
                <Avatar
                  icon={<SafetyCertificateOutlined style={{ fontSize: 64 }} />}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    paddingTop: 48,
                  }}
                />
              }
            >
              <Card.Meta
                style={{ textAlign: "center" }}
                title={
                  <Typography.Text
                    style={{
                      fontFamily: "SFProDisplay-Black",
                      fontSize: 20,
                      lineHeight: "28px",
                    }}
                  >
                    App Tokens
                  </Typography.Text>
                }
                description={
                  <Typography.Text
                    style={{
                      fontFamily: "SFProDisplay-Regular",
                      lineHeight: "20px",
                      fontSize: 14,
                    }}
                  >
                    App Tokens can be assigned to services that cannot login
                    interactively. You can grant a new app token to your account
                    by clicking the Grant App Token button within the Security /
                    App Tokens tab.
                  </Typography.Text>
                }
              />
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Link to={`/security/roles/12`}>
            <Card
              bodyStyle={{ padding: 48 }}
              bordered={false}
              cover={
                <Avatar
                  icon={<UsergroupAddOutlined style={{ fontSize: 64 }} />}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    paddingTop: 48,
                  }}
                />
              }
            >
              <Card.Meta
                style={{ textAlign: "center" }}
                title={
                  <Typography.Text
                    style={{
                      fontFamily: "SFProDisplay-Black",
                      fontSize: 20,
                      lineHeight: "28px",
                    }}
                  >
                    Roles
                  </Typography.Text>
                }
                description={
                  <Typography.Text
                    style={{
                      fontFamily: "SFProDisplay-Regular",
                      lineHeight: "20px",
                      fontSize: 14,
                    }}
                  >
                    To assign a role to a user, you can create their identity
                    within Universal and then select the role in the drop down
                    on the Identities page. By default, identities receive a
                    role through policy.
                  </Typography.Text>
                }
              />
            </Card>
          </Link>
        </Col>
      </Row>
    </Loader>
  );
}
