import React, { useState } from "react";
import { Form, Input, Select, Tooltip, Switch, Button } from "antd";
import { ValidateStatus } from "antd/lib/form/FormItem";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  useDashboard,
  useEnvironments,
  useFrameworks,
  useRoles,
} from "service-hooks";
import { queryCache } from "react-query";
import { Environment, DashboardFramework, Role, Dashboard } from "types";
import { useParams } from "react-router-dom";

export default function DashboardSettings() {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  const { data: dashboard } = useDashboard(id);
  const { data: roles } = useRoles();
  const { data: frameworks } = useFrameworks();
  const { data: powershell } = useEnvironments();
  const [nameValidation, setNameValidation] = useState<ValidateStatus>();
  const [pathValidation, setPathValidation] = useState<ValidateStatus>();
  const [baseUrlValidation, setBaseUrlValidation] = useState<ValidateStatus>();

  const [form] = Form.useForm();

  async function validateName(name: Dashboard["name"]) {
    if (dashboard?.name === name) {
      return Promise.resolve();
    }
    if (null === name || name === "" || name === undefined) {
      setNameValidation("error");
      return Promise.reject("Dashboard name can't be empty");
    } else {
      setNameValidation("validating");
      if (
        queryCache
          .getQueryData<Dashboard[]>("dashboards")
          ?.find((dashboard: Dashboard) => dashboard.name === name)
      ) {
        setNameValidation("error");
        return Promise.reject("Dashboard with that name already exists!");
      } else {
        setNameValidation("success");
        return Promise.resolve();
      }
    }
  }

  async function validateBaseUrl(baseUrl: Dashboard["baseUrl"]) {
    if (dashboard?.baseUrl === baseUrl) {
      return Promise.resolve();
    }
    if (null === baseUrl || baseUrl === "" || baseUrl === undefined) {
      setBaseUrlValidation("error");
      return Promise.reject("Dashboard url can't be empty!");
    } else if (!baseUrl.startsWith("/")) {
      setBaseUrlValidation("error");
      return Promise.reject("Dashboard url need to start with /");
    } else {
      setBaseUrlValidation("validating");
      if (
        queryCache
          .getQueryData<Dashboard[]>("dashboards")
          ?.find((dashboard: Dashboard) => dashboard.baseUrl === baseUrl)
      ) {
        setBaseUrlValidation("error");
        return Promise.reject("Dashboard with that url already exists!");
      } else {
        setBaseUrlValidation("success");
        return Promise.resolve();
      }
    }
  }

  async function validateFilePath(filePath: Dashboard["filePath"]) {
    if (dashboard?.filePath === filePath) {
      return Promise.resolve();
    }
    if (null === filePath || filePath === "" || filePath === undefined) {
      setPathValidation("error");
      return Promise.reject("File path can't be empty!");
    }
    setPathValidation("validating");
    if (
      queryCache
        .getQueryData<Dashboard[]>("dashboards")
        ?.find((dashboard: Dashboard) => dashboard.filePath === filePath)
    ) {
      setPathValidation("error");
      return Promise.reject("Dashboard with that file already exists!");
    } else {
      setPathValidation("success");
      return Promise.resolve();
    }
  }
  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
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
        validateStatus={nameValidation}
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
        validateStatus={baseUrlValidation}
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
        validateStatus={pathValidation}
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
          {powershell?.map((psVersion: Environment) => (
            <Select.Option key={psVersion.id} value={psVersion.name}>
              {psVersion.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="dashboardFramework" label="Framework">
        <Select>
          {frameworks?.map((framework: DashboardFramework) => (
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
                {roles?.map((role: Role) => (
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
        <Button type="primary" htmlType="submit">
          Save Settings
        </Button>
      </Form.Item>
    </Form>
  );
}
