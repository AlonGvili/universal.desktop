import { presetPrimaryColors } from "@ant-design/colors";
import { Badge, Tag } from "antd";
import React from "react";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  SyncOutlined,
  MinusCircleOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

declare const MethodName: ["GET", "POST", "DELETE", "PUT"];
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
      return <Badge status="default" text="NA" />;
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
