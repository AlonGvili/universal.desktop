import React from "react";
import { Space, Typography } from "antd/es";
import { capitalize } from "utilities/utils";

export default function CardHeader(props: {
  name: string | string[] | ((value: string) => string);
  description?: string;
}) {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Typography.Text
        style={{
          fontSize: 14,
          fontWeight: 600,
          lineHeight: "28px",
          fontFamily: "SFProDisplay-Semibold",
        }}
      >
        { capitalize(props.name) }
      </Typography.Text>
      <Typography.Paragraph
        ellipsis
        type="secondary"
        style={{
          overflow: "hidden",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: "22px",
          fontFamily: "SFProDisplay-Regular",
          //   display: "flex",
          //   textAlign: "center",
        }}
      >
        {props.description === undefined ? <br /> : props.description}
      </Typography.Paragraph>
    </Space>
  );
}
