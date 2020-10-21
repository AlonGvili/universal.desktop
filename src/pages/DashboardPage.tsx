import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "antd";
import { useDashboard } from "service-hooks";
import useContentProvider from "../context/content/Hooks";

const Loader = lazy(
  () => import(/* webpackChunkName: 'Loader' */ "components/Loader")
);
const DashboardInfo = lazy(
  () =>
    import(/* webpackChunkName: 'DashboardInfo' */ "components/DashboardInfo")
);
const DashboardEditor = lazy(
  () =>
    import(
      /* webpackChunkName: 'DashboardEditor' */ "components/DashboardEditor"
    )
);
const DashboardPages = lazy(
  () =>
    import(/* webpackChunkName: 'DashboardPages' */ "components/DashboardPages")
);
const ComponentsDrawer = lazy(
  () =>
    import(
      /* webpackChunkName: 'ComponentsDrawer' */ "components/ComponentDrawer"
    )
);

export default function DashboardPage() {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  const { data: dashboard, isLoading } = useDashboard(id);
  const [{ left, right }] = useContentProvider();

  return (
    <Loader tip={`Loading Dashboard ${dashboard?.id}...`} spinning={isLoading}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <DashboardInfo dashboard={dashboard} />
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col span={left.colSpan} style={{ height: "100%" }}>
          <DashboardEditor dashboard={dashboard} />
        </Col>

        <Col span={right.colSpan} style={{ height: "inherit" }}>
          <DashboardPages dashboard={dashboard} />
        </Col>
      </Row>
      <ComponentsDrawer />
    </Loader>
  );
}
