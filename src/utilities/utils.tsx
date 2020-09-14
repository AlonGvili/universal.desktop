/// This is where we should start putting things that require a switch between the desktop\web version so it's all in one place

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


export function setMethodColor(method: string | undefined) {
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

export function setStatusColor(status: number | undefined) {
  switch (status) {
    case 0:
      return <Badge status="error" text="Stopped" />;
    case 1:
      return <Badge status="processing" text="Running" />;
    case 3:
      return <Badge status="default" text="N/A" />;
    case 4:
      return <Badge status="warning" text="Waiting for feedback" />;
  }
}

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
