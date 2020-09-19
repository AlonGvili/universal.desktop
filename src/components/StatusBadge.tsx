import React from "react";
import { Tooltip, Badge } from "antd/es";

type StatusBadgeStop = {
  color: "red";
  title: "Dashboard is Stopped";
  status: "error";
};

type StatusBadgeRun = {
  color: "blue";
  title: "Dashboard is Running";
  status: "processing";
};

type StatusBadgeDefault = {
  color: "gray";
  title: "NA";
  status: "default";
};

type StatusBadgeFeedback = {
  color: "yellow";
  title: "Waiting for feedback";
  status: "warning";
};

interface StatusBadgeStatus {
  0: StatusBadgeStop;
  1: StatusBadgeRun;
  3: StatusBadgeDefault;
  4:StatusBadgeFeedback
}


type Action = {
  [index: number]:
    | StatusBadgeStop
    | StatusBadgeRun
    | StatusBadgeDefault
    | StatusBadgeFeedback
};


const Alon: Action = {
  0: { color: "red", status: "error", title: "Dashboard is Stopped" },
  1: { color: "blue", status: "processing", title: "Dashboard is Running" },
  3: { color: "gray", status: "default", title: "NA" },
  4: { color: "yellow", status: "warning", title: "Waiting for feedback" },
};

export default function StatusBadge(props: { status: number }) {
  return (
    <Tooltip
      arrowPointAtCenter={true}
      color={Alon[props.status].color}
      title={Alon[props.status].title}
    >
      <Badge status={Alon[props.status].status} />
    </Tooltip>
  );
}
