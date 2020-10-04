import { presetPrimaryColors } from "@ant-design/colors";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  FieldTimeOutlined,
  LockFilled,
  MinusCircleOutlined,
  PoweroffOutlined,
  SyncOutlined,
  UnlockFilled,
} from "@ant-design/icons";
import { Badge, Tag, Tooltip } from "antd";
// import Axios from "axios";
import * as JsSearch from "js-search";
import React from "react";
// import { Observable } from "rxjs";
export declare const MethodName: ["GET", "POST", "DELETE", "PUT"];
export declare type MethodType = typeof MethodName[number];

/**
 * Set the color for the current method.
 * @param method
 * @example setMethodColor("GET")
 * @description Will return the method text with the correct color.
 */
export function setMethodColor(method: MethodType | undefined) {
  switch (method) {
    case "GET":
      return presetPrimaryColors["blue"];
    case "POST":
      return presetPrimaryColors["green"];
    case "DELETE":
      return presetPrimaryColors["red"];
    case "PUT":
      return presetPrimaryColors["orange"];
  }
}

/**
 * Set the power button icon color base on the dashboard current status.
 * @param status
 * @description Will return the currect icon color base on the current dashboard status.
 * @example setPowerIconColor(0)
 */
export function setPowerIconColor(status: number | undefined) {
  switch (status) {
    case 0:
      return (
        <Tooltip title="Dashboard Is Stopped" color="red">
          <PoweroffOutlined
            style={{
              color: presetPrimaryColors["red"],
            }}
          />
        </Tooltip>
      );
    case 1:
      return (
        <Tooltip title="Dashboard Is Running" color="blue">
          <PoweroffOutlined
            style={{
              color: presetPrimaryColors["blue"],
            }}
          />
        </Tooltip>
      );
    case 3:
      return (
        <Tooltip title="Dashboard In Debug Mode" color="cyan">
          <PoweroffOutlined
            style={{
              color: presetPrimaryColors["cyan"],
            }}
          />
        </Tooltip>
      );
    case 4:
      return (
        <Tooltip title="Dashboard Is Waiting For Feedback" color="gold">
          <PoweroffOutlined
            style={{
              color: presetPrimaryColors["gold"],
            }}
          />
        </Tooltip>
      );
  }
}

/**
 * Set the Auth icon color.
 * @param authenticated
 * @description Set the Auth icon color base on if dashboard authentication is enabled or not.
 * @example setAuthIcon(true)
 */
export function setAuthIcon(authenticated: boolean) {
  switch (authenticated) {
    case true:
      return (
        <Tooltip title="Authentication Enabled" color="blue">
          <LockFilled
            style={{
              color: presetPrimaryColors["blue"],
            }}
          />
        </Tooltip>
      );
    case false:
      return (
        <Tooltip title="Authentication Disabled" color="red">
          <UnlockFilled
            style={{
              color: presetPrimaryColors["red"],
            }}
          />
        </Tooltip>
      );
  }
}

export declare const StatusNumber: [0, 1, 3, 4];
export declare type StatusType = typeof StatusNumber[number];

/**
 * Return a Badge with text and color
 * @param {StatusType[]} status
 * @example setStatusColor(1)
 * @description Will return ant-design Badge component base on status number.
 * @author Alon Gvili
 */
export function setStatusColor(status: StatusType) {
  switch (status) {
    case 0:
      return <Badge status="error" text="Stopped" />;
    case 1:
      return <Badge status="processing" text="Running" />;
    case 3:
      return <Badge status="default" text="Debug Mode" />;
    case 4:
      return <Badge status="warning" text="Waiting for feedback" />;
  }
}

/**
 *
 * @description Will return ant-design tag component base on status number.
 * @param status
 * @example setStatusTag(1)
 * @author Alon Gvili
 */
export function setStatusTag(status: number) {
  switch (status) {
    case 0:
      return (
        <Tag icon={<FieldTimeOutlined />} color="default">
          queued
        </Tag>
      );
    case 1:
      return (
        <Tag icon={<SyncOutlined spin />} color="processing">
          running
        </Tag>
      );
    case 2:
      return (
        <Tag icon={<CheckCircleOutlined />} color="success">
          success
        </Tag>
      );
    case 3:
      return (
        <Tag icon={<CloseCircleOutlined />} color="error">
          failed
        </Tag>
      );
    case 4:
      return (
        <Tag icon={<ClockCircleOutlined />} color="purple">
          waiting
        </Tag>
      );
    case 5:
      return (
        <Tag icon={<MinusCircleOutlined />} color="default">
          cancelled
        </Tag>
      );
    case 6:
      return (
        <Tag icon={<ExclamationCircleOutlined />} color="warning">
          warning
        </Tag>
      );
  }
}

export function capitalize(
  text: undefined | string | string[] | ((value: string) => string)
) {
  if (typeof text !== "string") return "";
  if (text === undefined) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function appSearch(
  key: string | number,
  fields: any,
  data: object | object[] | undefined,
  term: string
) {
  if (data === undefined) return;

  let uniqeKey = typeof key === "number" ? key.toString() : key;
  const search = new JsSearch.Search(uniqeKey);
  search.searchIndex = new JsSearch.UnorderedSearchIndex();

  let fieldset: string[] | [string[]] = [];
  if (!Array.isArray(fields)) {
    fieldset.push(fields);
  }
  if (Array.isArray(fields)) {
    fieldset = fields;
  }
  fieldset.forEach((field) => search.addIndex(field));

  search.addDocuments(Array.isArray(data) ? data : [data]);

  return search.search(term);
}
