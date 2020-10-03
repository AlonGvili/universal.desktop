import React from "react";
import { Space } from "antd/es";

export default function BodyLink(props: React.PropsWithChildren<any>) {
  return (
    <Space direction="vertical" size={24} style={{ width: "100%" }}>
      {props.children}
    </Space>
  );
}
