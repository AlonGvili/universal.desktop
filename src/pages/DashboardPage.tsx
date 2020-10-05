import React from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";
import { queryCache } from "react-query";
import { Dashboard } from "types";
import { from, fromEvent, interval, of } from "rxjs";
import { switchMap, takeUntil, scan, startWith } from "rxjs/operators";
import { Button } from "antd";

export default function DashboardPage() {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  const dashboards: Dashboard[] | undefined = queryCache.getQueryData<Dashboard[]>([
    "dashboards"
  ]);

  console.log(dashboards)
  const btnRef = React.useRef<any>(null);
  const btnStopRef = React.useRef<any>(null);
  // let x = <button></button>

  React.useEffect(() => {
    const stop$ = fromEvent(btnStopRef.current, "click");
    // const start$ = fromEvent(btnRef.current, "click");
    const start$ = from(dashboards || [])

    const startInterval = start$
      .pipe(switchMap((dashboard) => [dashboard.name])).pipe(takeUntil(stop$))
      .pipe(startWith("Dashboards"))
      // .pipe(scan((acc) => acc + 1));
    const result = startInterval.subscribe((x) => console.log(x));

    return () => result.unsubscribe();
  }, [dashboards]);
  // function onClick

  // const dashboard: Dashboard | undefined = queryCache.getQueryData<Dashboard>([
  //   "dashboard",
  //   { dashboardId: id },
  // ]);
  return (
    // <Loader tip={`Loading Dashboard ${dashboard?.id}...`} spinning>
    <>
      <Button ref={btnRef}>Start</Button>
      <Button ref={btnStopRef}>Stop</Button>
    </>
    // </Loader>
  );
}

DashboardPage.displayName = "DashboardPage";
