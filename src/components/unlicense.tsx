import React from "react";
import { Result, Button } from "antd/es";
import { CreditCardOutlined } from "@ant-design/icons";

export default function UnLicense(props: { title: string }) {
  return (
    <Result
      title={props.title}
      status="warning"
      extra={
        <Button
          icon={<CreditCardOutlined />}
          onClick={() => {
            window.location.href =
              "https://ironmansoftware.com/powershell-universal?rel=product";
          }}
        >
          Buy License
        </Button>
      }
    />
  );
}
