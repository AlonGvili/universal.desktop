import {
  InfoCircleOutlined,
} from "@ant-design/icons";
import {
  Form,
  Input,
  message,
  Modal,
  Radio,
  Select,
  Space,
  Switch,
  Tooltip,
  Typography,
} from "antd";
import { ValidateStatus } from "antd/lib/form/FormItem";
import React, { useState } from "react";
import { queryCache } from "react-query";
import {
  useEnvironments,
  useFrameworks,
  useNewDashboard,
  useNewestFramework,
  useRoles,
} from "service-hooks";
import {
  Dashboard,
  DashboardFramework,
  Environment,
  Role,
} from "types";

export default function NewDashboardModal(props: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [nameValidateStatus, setNameValidateStatus] = useState<
    ValidateStatus
  >();
  const [filePathValidateStatus, setFilePathValidateStatus] = useState<
    ValidateStatus
  >();
  const [baseUrlValidateStatus, setBaseUrlValidateStatus] = useState<
    ValidateStatus
  >();

  const [dashboardOption, setDashboardOption] = useState("new");

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  const [form] = Form.useForm();
  const [optionsForm] = Form.useForm();
  const [addDashboard, { isLoading }] = useNewDashboard();
  const frameworks = useFrameworks();
  const latestFramework = useNewestFramework(); 
  const powershell = useEnvironments();
  const roles = useRoles();

  function onOk() {
    form
      .validateFields()
      .then(async (values) => {
        let newDashboard: Partial<Dashboard> = {
          ...values,
          environment:
            values.environment === "Default" ? null : values.environment,
          dashboardFramework: {
            id: values.dashboardFramework,
            name: "",
            path: "",
            version: "",
          },
        };

        addDashboard(newDashboard as Dashboard, {
          onError: () => {
            message.error("Faild to add dashboard");
          },
        }).then(() => {
          form.resetFields();
          optionsForm.resetFields();
          setBaseUrlValidateStatus(undefined);
          setFilePathValidateStatus(undefined);
          setNameValidateStatus(undefined);
          setDashboardOption("new");
          props.setIsOpen(false);
        });
      })
      .catch((errorInfo) => {
        console.log("Dashboard form errors", errorInfo);
      });
  }

  function onCancel() {
    form.resetFields();
    optionsForm.resetFields();
    setBaseUrlValidateStatus(undefined);
    setFilePathValidateStatus(undefined);
    setNameValidateStatus(undefined);
    setDashboardOption("new");
    props.setIsOpen(false);
  }

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

  function onOptionsChange(changedValues, values) {
    setDashboardOption(changedValues.options);
  }

  return (
    <Modal
      visible={props.isOpen}
      onCancel={onCancel}
      onOk={onOk}
      okButtonProps={{ loading: isLoading }}
      title={
        <Typography
          style={{
            fontFamily: "SFProDisplay-Semibold",
            fontSize: 20,
            fontWeight: 600,
            lineHeight: "28px",
          }}
        >
          New Dashboard
        </Typography>
      }
    >
      <Space direction="vertical" size="small" style={{ width: "100%" }}>
        <Form
          form={optionsForm}
          onValuesChange={onOptionsChange}
          initialValues={{
            options: "new",
          }}
        >
          <Form.Item>
            <Typography
              style={{
                fontFamily: "SFProDisplay-Semibold",
                fontSize: 20,
                lineHeight: "28px",
              }}
            >
              Options
            </Typography>
            <Typography
              style={{
                fontFamily: "SFProDisplay-Regular",
                fontSize: 14,
                lineHeight: "20px",
              }}
            >
              <Typography>
                Choose how you want to create the new dashboard, you have two
                options
              </Typography>
              <Typography>
                you can create it from scratch or import existed one
              </Typography>
            </Typography>
          </Form.Item>
          <Form.Item name="options">
            <Radio.Group size="middle" buttonStyle="solid" optionType="button">
              <Radio.Button value="new">New Dashboard</Radio.Button>
              <Radio.Button value="import">Import Dashboard</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
        <Form
          {...formItemLayout}
          form={form}
          labelAlign="left"
          requiredMark={false}
          name="dashboard_modal"
          initialValues={{
            baseUrl: "/dashboard",
            environment: "Default",
            dashboardFramework: latestFramework.data?.id,
            disableAutoStart: true,
            authenticated: false,
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
          {dashboardOption === "import" && (
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
          )}
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
            <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" />
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
            <Switch checkedChildren="Yes" unCheckedChildren="No" />
          </Form.Item>
        </Form>
      </Space>
    </Modal>
  );
}
