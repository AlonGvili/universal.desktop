import React from "react";
import { Form, Input, Button, Typography, Layout, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { presetDarkPalettes } from "@ant-design/colors";
// import { useLogin } from "../service-hooks";
// import "../../fonts.css";
// import { useHistory } from "react-router-dom";
// import useAuthProvider from "../Context/Auth/hooks";

export default function LoginPage() {
  // const [signin, { isLoading, isError, error }] = useLogin();
  // const { setAttempts, setAuthenticated } = useAuthProvider();
  // const history = useHistory();
  return (
    <Layout
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Space size={24} direction="vertical" align="center">
        <Typography>
          <Space direction="horizontal" size={0}>
            <Typography.Text
              style={{
                color: presetDarkPalettes["blue"][6],
                fontFamily: "SFProDisplay-Black",
                fontSize: 24,
              }}
            >
              PowerShell
            </Typography.Text>
            <Typography.Text
              style={{
                fontFamily: "SFProDisplay-Semibold",
                fontSize: 24,
              }}
            >
              Universal
            </Typography.Text>
          </Space>
        </Typography>
        <Typography>
          <Typography.Paragraph
            style={{
              textAlign: "center",
              fontFamily: "SFProDisplay-Semibold",
              maxWidth: 340,
            }}
          >
            PowerShell Universal allows you to run jobs, schedule scripts, build
            web pages and APIs, and control access; all under a single pane of
            beautiful glass.
          </Typography.Paragraph>
        </Typography>
        <Layout.Content
          style={{
            maxWidth: 330,
            maxHeight: 360,
            padding: 24,
            flex: "unset",
            backgroundColor: "#141414",
          }}
        >
          <Space size={24} direction="vertical">
            <Typography style={{ width: "100%" }}>
              <Typography.Title
                level={5}
                style={{
                  width: "inherit",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#DBDBDB",
                }}
              >
                Log in to your account
              </Typography.Title>
            </Typography>

            <Form
              name="normal_login"
              style={{ maxWidth: 330, maxHeight: 360 }}
              // onFinish={(values) =>
              //   signin(values, {
              //     onSuccess: () => {
              //       // queryCache.invalidateQueries("isAuthenticated");
              //       setAttempts((oldAttempts) => oldAttempts + 1);
              //       setAuthenticated(true);
              //       history.replace("/");
              //     },
              //   })
              // }
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={
                    <UserOutlined
                      style={{ color: presetDarkPalettes["blue"][6] }}
                    />
                  }
                  bordered={false}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={
                    <LockOutlined
                      style={{ color: presetDarkPalettes["blue"][6] }}
                    />
                  }
                  bordered={false}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  // loading={isLoading}
                  block
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            {/* {isError && (
              <Form.Item>
                <Alert
                  message={error?.response?.data || error?.message}
                  type="error"
                  showIcon
                />
              </Form.Item>
            )} */}
          </Space>
        </Layout.Content>
        <Typography>
          <Typography.Paragraph>Ironman Software © 2020</Typography.Paragraph>
        </Typography>
      </Space>
    </Layout>
  );
}
