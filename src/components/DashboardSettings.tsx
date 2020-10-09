import React, { useState } from "react";
import { Form, Input, Select, Tooltip, Switch, Button } from "antd";
import { ValidateStatus } from "antd/lib/form/FormItem";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useEnvironments, useFrameworks, useRoles } from "service-hooks";
import { queryCache } from "react-query";
import { Environment, DashboardFramework, Role, Dashboard } from "types";

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

export default function DashboardSettings(props: {
  dashboard: Dashboard | undefined;
}) {
  const { dashboard } = props;
  const [nameValidateStatus, setNameValidateStatus] = useState<
    ValidateStatus
  >();
  const [filePathValidateStatus, setFilePathValidateStatus] = useState<
    ValidateStatus
  >();
  const [baseUrlValidateStatus, setBaseUrlValidateStatus] = useState<
    ValidateStatus
  >();

  const [form] = Form.useForm();
  const roles = useRoles();
  const frameworks = useFrameworks();
  const powershell = useEnvironments();

  async function validateName(name) {
    if (null === name || name === "" || name === undefined) {
      setNameValidateStatus("error");
      return Promise.reject("Dashboard name can't be empty");
    } else {
      setNameValidateStatus("validating");
      if (
        queryCache
          .getQueryData<Dashboard[]>("dashboards")
          ?.find((dashboard: Dashboard) => dashboard.name === name)
      ) {
        setNameValidateStatus("error");
        return Promise.reject("Dashboard with that name already exists!");
      } else {
        setNameValidateStatus("success");
        return Promise.resolve();
      }
    }
  }

  async function validateBaseUrl(baseUrl) {
    if (null === baseUrl || baseUrl === "" || baseUrl === undefined) {
      setBaseUrlValidateStatus("error");
      return Promise.reject("Dashboard url can't be empty!");
    } else if (!baseUrl.startsWith("/")) {
      setBaseUrlValidateStatus("error");
      return Promise.reject("Dashboard url need to start with /");
    } else {
      setBaseUrlValidateStatus("validating");
      if (
        queryCache
          .getQueryData<Dashboard[]>("dashboards")
          ?.find((dashboard: Dashboard) => dashboard.baseUrl === baseUrl)
      ) {
        setBaseUrlValidateStatus("error");
        return Promise.reject("Dashboard with that url already exists!");
      } else {
        setBaseUrlValidateStatus("success");
        return Promise.resolve();
      }
    }
  }

  async function validateFilePath(filePath) {
    if (null === filePath || filePath === "" || filePath === undefined) {
      setFilePathValidateStatus("error");
      return Promise.reject("File path can't be empty!");
    }
    setFilePathValidateStatus("validating");
    if (
      queryCache
        .getQueryData<Dashboard[]>("dashboards")
        ?.find((dashboard: Dashboard) => dashboard.filePath === filePath)
    ) {
      setFilePathValidateStatus("error");
      return Promise.reject("Dashboard with that file already exists!");
    } else {
      setFilePathValidateStatus("success");
      return Promise.resolve();
    }
  }
  return (
    <Form
      {...formItemLayout}
      style={{ paddingTop: 24 }}
      form={form}
      labelAlign="left"
      requiredMark={false}
      name="dashboard_settings"
      initialValues={{
        baseUrl: dashboard?.baseUrl,
        environment: dashboard?.environment,
        dashboardFramework: dashboard?.dashboardFramework.id,
        disableAutoStart: dashboard?.disableAutoStart,
        authenticated: dashboard?.authenticated,
        name: dashboard?.name,
        role: dashboard?.role,
      }}
    >
      <Form.Item
        name="name"
        label="Name"
        hasFeedback
        validateStatus={nameValidateStatus}
        required
        rules={[
          {
            validator: async (_, value) => validateName(value),
          },
        ]}
      >
        <Input
          suffix={
            <Tooltip title="Name of the Universal Dashboard">
              <InfoCircleOutlined />
            </Tooltip>
          }
        />
      </Form.Item>
      <Form.Item
        name="baseUrl"
        label="Url"
        hasFeedback
        validateStatus={baseUrlValidateStatus}
        rules={[
          {
            validator: async (_, value) => validateBaseUrl(value),
          },
        ]}
      >
        <Input
          suffix={
            <Tooltip title="Enter the url path where the dashboard will be hosted. ex: /dashboard">
              <InfoCircleOutlined />
            </Tooltip>
          }
        />
      </Form.Item>

      <Form.Item
        name="filePath"
        label="Path"
        hasFeedback
        validateStatus={filePathValidateStatus}
        required
        rules={[
          {
            validator: async (_, value) => validateFilePath(value),
          },
        ]}
      >
        <Input
          suffix={
            <Tooltip title="File path to the Dashboard file.">
              <InfoCircleOutlined />
            </Tooltip>
          }
        />
      </Form.Item>

      <Form.Item name="environment" label="Environment">
        <Select defaultActiveFirstOption>
          {powershell.data?.map((psVersion: Environment) => (
            <Select.Option key={psVersion.id} value={psVersion.name}>
              {psVersion.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="dashboardFramework" label="Framework">
        <Select>
          {frameworks.data?.map((framework: DashboardFramework) => (
            <Select.Option
              key={framework.id}
              value={framework.id}
            >{`${framework.name} [${framework.version}]`}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="authenticated" label="Authentication">
        <Switch
          defaultChecked={dashboard?.authenticated}
          checkedChildren="Enabled"
          unCheckedChildren="Disabled"
        />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.authenticated !== currentValues.authenticated
        }
      >
        {({ getFieldValue }) => {
          return getFieldValue("authenticated") === true ? (
            <Form.Item name="role" label="Role">
              <Select defaultActiveFirstOption>
                {roles.data?.map((role: Role) => (
                  <Select.Option key={role.name} value={role.name}>
                    {role.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          ) : null;
        }}
      </Form.Item>
      <Form.Item name="disableAutoStart" label="AutoStart">
        <Switch
          checkedChildren="Yes"
          unCheckedChildren="No"
          defaultChecked={dashboard?.disableAutoStart}
        />
      </Form.Item>
      <Form.Item>
          <Button type="primary" htmlType="submit">Save Settings</Button>
      </Form.Item>
    </Form>
  );
}
