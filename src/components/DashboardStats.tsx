import React from "react"
import { queryCache } from "react-query";
import { useParams } from "react-router-dom";
import { Dashboard } from "types";
import { Space, Typography} from "antd"
import byteSize from 'byte-size'
import { useDashboardDiagnostics } from "service-hooks";

function renderStatTitle<T>(value: keyof T) {
    return (
      <Typography.Text
        style={{
          fontFamily: "SFProDisplay-Semibold",
          fontSize: 14,
        }}
      >
        {value}
      </Typography.Text>
    );
  }

function renderStatValue<T>(value: keyof T) {
    return (
      <Typography.Text
        style={{
          fontFamily: "SFProDisplay-Regular",
          fontSize: 14,
        }}
      >
        {value}
      </Typography.Text>
    );
  }

function renderStats(title: string, value: string){
    return <Space>
        {renderStatTitle(title)}
        {renderStatValue(value)}
    </Space>
}  

export default function DashboardStats(){
    const id = Number.parseInt(useParams<{ id: string }>().id);
    const dashboard = queryCache.getQueryData<Dashboard>([
        "dashboard",
        { dashboardId: id },
      ]);
      const { data: diagnostics } = useDashboardDiagnostics(
        id,
        dashboard?.status === 1
      );

    let memory = renderStats("Memory:", `${byteSize(diagnostics?.memory || 0).value}${byteSize(diagnostics?.memory).unit.toLowerCase()}`)  
    let sessions = renderStats("Sessions:", `${diagnostics?.sessions?.length || 0}`)  
    let endpoints = renderStats("Endpoints:", `${diagnostics?.endpoints?.length || 0}`)  
    return <Space size="large">
        {memory}
        {sessions}
        {endpoints}
    </Space>
}