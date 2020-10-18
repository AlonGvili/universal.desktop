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

export default function DashboardPage() {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  const { data: dashboard } = useDashboard(id);
  const [{ left, right }] = useContentProvider();

  return (
    <Loader tip={`Loading Dashboard ${dashboard?.id}...`} spinning>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <DashboardInfo dashboard={dashboard} />
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col span={left.colSpan} style={{ height: "100%" }}>
          <DashboardEditor dashboard={dashboard} />
        </Col>

        <Col span={right.colSpan} style={{ minHeight: "100%" }}>
          <DashboardPages dashboard={dashboard} />
        </Col>
      </Row>
    </Loader>
  );
}
