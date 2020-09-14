import React from "react";
import { Alert } from "antd/es";
import Spin, { SpinProps } from "antd/lib/spin";

export default function Loader(
  props: SpinProps & { children: React.ReactNode }
) {
  const { children, ...rest } = props
  return (
    <React.Suspense fallback={<Spin {...rest} />}>
      <Alert.ErrorBoundary>{children}</Alert.ErrorBoundary>
    </React.Suspense>
  );
}
