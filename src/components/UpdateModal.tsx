import React, { useState } from "react";
import { Modal, Input, Form, Tooltip, Select, message, Radio } from "antd";
import {
  InfoCircleOutlined,
  LockOutlined,
  UnlockOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons/es/icons";
import {
  useNewDashboard,
  useFrameworks,
  useEnvironments,
  useRoles,
  useNewestFramework,
} from "../service-hooks";
import {
  Dashboard,
  Role,
  DashboardFramework,
  Environment,
  Feature,
} from "../types";
import { ValidateStatus } from "antd/lib/form/FormItem";
import { queryCache } from "react-query";
// import useAppContext from "../AppContext";
// import { AxiosError } from "axios";

export default function DashboardModal(props: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isImportModal: boolean;
}) {
  const [form] = Form.useForm();
  const [nameValidateStatus, setNameValidateStatus] = useState<
    ValidateStatus
  >();
  const [filePathValidateStatus, setFilePathValidateStatus] = useState<
    ValidateStatus
  >();
  const [baseUrlValidateStatus, setBaseUrlValidateStatus] = useState<
    ValidateStatus
  >();

//   const [isAuth, setIsAuth] = useState(false);

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  const [addDashboard, addDashboardInfo] = useNewDashboard();
  const frameworks = useFrameworks();
  const latestFramework = useNewestFramework();
  const powershell = useEnvironments();
  const roles = useRoles();

//   const { licensedFeatures } = useAppContext();

  function onOk() {
    form
      .validateFields()
      .then(async (values) => {
        console.log("values", values);
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
          onError: (error, dashboard, _) => {
            message.error("Faild to add dashboard");
          },
        }).then(() => {
          form.resetFields();
          setBaseUrlValidateStatus(undefined);
          setFilePathValidateStatus(undefined);
          setNameValidateStatus(undefined);
          props.setIsOpen(false);
        });
      })
      .catch((errorInfo) => {
        console.log("Dashboard form errors", errorInfo);
      });
  }

  function onCancel() {
    form.resetFields();
    setBaseUrlValidateStatus(undefined);
    setFilePathValidateStatus(undefined);
    setNameValidateStatus(undefined);
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

  return (
    <Modal
      visible={props.isOpen}
      onCancel={onCancel}
      onOk={onOk}
      okButtonProps={{ loading: addDashboardInfo.isLoading }}
      title={props.isImportModal ? "Import Dashboard" : "Create New Dashboard"}
      width={680}
    >
      <Form
        {...formItemLayout}
        form={form}
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
        {props.isImportModal && (
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
          <Select
          // defaultValue={latestFramework.data?.id}
          // loading={latestFramework.isLoading}
          >
            {frameworks.data?.map((framework: DashboardFramework) => (
              <Select.Option
                key={framework.id}
                value={framework.id}
              >{`${framework.name} [${framework.version}]`}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="authenticated" label="Auth">
          <Radio.Group
            buttonStyle="solid"
            size="small"
            disabled={[2].indexOf(Feature.Dashboard) === -1}
          >
            <Radio.Button value={true}>
              <Tooltip
                arrowPointAtCenter={true}
                autoAdjustOverflow={true}
                title="Enable dashboard authentication"
              >
                <LockOutlined />
              </Tooltip>
            </Radio.Button>
            <Radio.Button value={false}>
              <Tooltip
                arrowPointAtCenter={true}
                autoAdjustOverflow={true}
                title="Disable dashboard authentication"
              >
                <UnlockOutlined />
              </Tooltip>
            </Radio.Button>
          </Radio.Group>
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
          <Radio.Group buttonStyle="solid" size="small">
            <Radio.Button value={true}>
              <Tooltip
                arrowPointAtCenter={true}
                autoAdjustOverflow={true}
                title="Disable dashboard auto start"
              >
                <CloseOutlined />
              </Tooltip>
            </Radio.Button>
            <Radio.Button value={false}>
              <Tooltip
                arrowPointAtCenter={true}
                autoAdjustOverflow={true}
                title="Enable dashboard auto start"
              >
                <CheckOutlined />
              </Tooltip>
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
}
