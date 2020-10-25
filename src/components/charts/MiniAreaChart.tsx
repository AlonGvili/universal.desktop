import React from "react";
import { TinyLine, TinyColumn  } from "@ant-design/charts";
import type { TinyLineConfig } from "@ant-design/charts/es/tinyLine";
import type { TinyColumnConfig } from "@ant-design/charts/es/tinyColumn";
import { presetDarkPalettes } from "@ant-design/colors";
import { useParams } from "react-router-dom";
import { queryCache } from "react-query";
import { DashboardDiagnostics } from "types";
import byteSize from 'byte-size'

const DemoTinyArea: React.FC = () => {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  const data = queryCache.getQueryData<DashboardDiagnostics>(["dashboard", { dashboardId: id, type: "diagnostics"}])
//   const config: TinyLineConfig = {
//     height: 64,
//     width: 264,
//     autoFit: true,
//     data: data?.memoryHistory.slice(0,6).map(d => {
//         let mem = byteSize(d)
//         return mem.value
//     }) || [],
//     padding: 24,
//     smooth: false,
//     lineStyle: {
//       stroke: presetDarkPalettes["blue"][6],
//     },
//     point: {
//         size: 5,
//         shape: 'circle',
//         style: {
//           zIndex: 10,  
//           fill: '#141414',
//           stroke: '#2593fc',
//           lineWidth: 1,
//         },
//       },
//     tooltip: {
//       showCrosshairs: false,
//       showMarkers: true,
//     },
//     meta: {
//       y: {
//         max: 150,
//         min: -50,
//       },
//     },
//   };
  const config: TinyColumnConfig = {

      height: 48,
      width: 300,
      autoFit: false,
      padding: 16,
      data: data?.memoryHistory.map(d => {
                let mem = byteSize(d)
                return mem.value
            }) || []
    }
  return <TinyColumn {...config} />;
};
export default DemoTinyArea;
