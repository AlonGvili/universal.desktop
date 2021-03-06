import { Space, Typography } from "antd/es";
import React from "react";

export default function TagsSection(props: React.PropsWithChildren<any>) {
  return (
    <Typography
      style={{
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "22px",
        fontFamily: "SFProDisplay-Semibold",
      }}
    >
      <Space direction="vertical" size="small">
        Tags
        <Typography.Text
          type="secondary"
          style={{
            fontFamily: "SFProDisplay-Regular",
          }}
        >
          {props.children}
        </Typography.Text>
      </Space>
    </Typography>
  );
}
