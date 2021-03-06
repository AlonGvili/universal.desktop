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
import * as JsSearch from "js-search";
import React, { useState } from "react";
import { Dashboard, DashboardFramework, Module, Role } from "types";

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

export function appSearch<T>(
  key: string | number,
  fields: (string | string[])[],
  data: T | T[] | undefined,
  term: string
) {
  if (data === undefined) return;

  let uniqeKey = typeof key === "number" ? key.toString() : key;
  const search = new JsSearch.Search(uniqeKey);
  search.searchIndex = new JsSearch.UnorderedSearchIndex();

  let fieldset: (string | string[])[] = [];
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

export function useSearch<T>(
  key: string,
  fields: (string | string[])[],
  data: T[] | undefined
) {
  const [values, setFilterValue] = useState<T[] | undefined>(data);

  function search(value: string) {
    if (value === undefined || value === "") {
      setFilterValue(data);
    } else {
      let results = appSearch(key, fields, data, value);
      setFilterValue(results);
    }
  }

  return { values, search };
}

/**
 * Check whether a given value is an array where
 * each member is of a specified type
 *
 * @param arr - array to check
 * @param check - type guard to use when evaluating each item
 * @public
 */
export function isTypedArray<T>(
  arr: unknown,
  check: (x: any) => x is T
): arr is T[] {
  if (!Array.isArray(arr)) return false;
  const mismatch = arr.filter((item) => !check(item));
  if (mismatch.length > 0) return false;
  return true;
}


/**
 * Check whether a given value is an dashboard
 * @param arg - value to check
 * @beta
 */
export function isDashboard(arg: any): arg is Dashboard {
  return (
    typeof arg.id === "number" &&
    typeof arg.teamId === "string" &&
    typeof arg.description === "string" &&
    typeof arg.name === "string" &&
    typeof arg.id === "number" &&
    typeof arg.baseUrl === "string" &&
    typeof arg.description === "string" &&
    isDashboardFramework(arg.dashboardFramework) &&
    typeof arg.environment === "string" &&
    typeof arg.name === "string" &&
    typeof arg.content === "string" &&
    isRole(arg.role) &&
    // typeof arg.status === "StatusType" &&
    typeof arg.filePath === "string" &&
    typeof arg.authenticated === "boolean" &&
    typeof arg.disableAutoStart === "boolean" &&
    typeof arg.autoReload === "boolean" &&
    typeof arg.notes === "string" &&
    // typeof arg.tags === "Tag"[] &&
    typeof arg.processId === "number" &&
    typeof arg.processName === "string" &&
    isDashboardComponent( arg.dashboardComponents)
  );
}

export function isDashboardFramework(arg: any): arg is DashboardFramework {
  return typeof (arg as DashboardFramework).id === "number" &&
   typeof (arg as DashboardFramework).name === "string" &&
   typeof (arg as DashboardFramework).path === "string" &&
   typeof (arg as DashboardFramework).version === "string" 
}

export function isDashboardComponent(arg: any): arg is Module {
  return typeof (arg as Module).id === "number" &&
   typeof (arg as Module).name === "string" &&
   typeof (arg as Module).path === "string" &&
   typeof (arg as Module).version === "string" 
}

export function isRole(arg: any): arg is Role {
  return typeof (arg as Role).id === "number" &&
   typeof (arg as Role).name === "string" &&
   typeof (arg as Role).description === "string" 
}