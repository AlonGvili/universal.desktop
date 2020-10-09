import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import { queryCache } from "react-query";
import { Dashboard } from "types";
import { Col, Row } from "antd";
import useContentProvider from "../context/content/Provider";
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
  // const refRow = useRef<HTMLDivElement>({} as HTMLDivElement);
  const dashboard: Dashboard | undefined = queryCache.getQueryData<Dashboard>([
    "dashboard",
    { dashboardId: id },
  ]);

  const [{left,right}] = useContentProvider()

  return (
    <Loader tip={`Loading Dashboard ${dashboard?.id}...`} spinning>
      {/* Top page main dashboard info and actions row */}
      <Row gutter={[24, 24]}>
        {/* Dashboard main info and actions buttons */}
        <Col span={24}>
          <DashboardInfo dashboard={dashboard} />
        </Col>
      </Row>

  
        {/* Rest of the page main row with 2 columns  */}
        <Row gutter={[24, 24]}>
          {/* Left side code editor */}

          <Col span={left.colSpan} style={{ height: "100%" }}>
            {/* <Resizable grid={[12, 1]} bounds="parent"> */}
            <DashboardEditor
              dashboard={dashboard}
            />
            {/* </Resizable> */}
          </Col>
          {/* Right side dashboard settings, log, components, console, output, endpoints and sessions */}
          <Col span={right.colSpan} style={{ minHeight: "100%" }}>
            {/* <Resizable grid={[12, 1]} > */}
            <DashboardPages
              dashboard={dashboard}
            />
            {/* </Resizable> */}
          </Col>
        </Row>
    </Loader>
  );
}

DashboardPage.displayName = "DashboardPage";
