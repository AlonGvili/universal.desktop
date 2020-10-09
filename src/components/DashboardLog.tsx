import React, { useState } from "react";
import { useDashboardLog } from "service-hooks";
import { useParams } from "react-router-dom";
import { from } from "rxjs";
import { switchMap, startWith } from "rxjs/operators";
import dayjs from "dayjs";
import Editor from "@monaco-editor/react";

export default function DashboardLog() {
  const id = Number.parseInt(useParams<{ id: string }>().id);
  const logs = useDashboardLog(id);
  const [data, setData] = useState<string>("");

  React.useEffect(() => {
    const jsonOutput: { Timestamp: any; Data: any }[] =
      logs.data && JSON.parse(logs.data.log);

    if (jsonOutput === undefined) return;
    const logs$ = from(jsonOutput);

    const output = logs$
      .pipe(
        switchMap(
          (log) =>
            `${dayjs(log.Timestamp).format("hh:mm:ss A")}:  ${log.Data} \r\n`
        )
      )
      .pipe(startWith("---------------------------\r\n"))
      .pipe(startWith(`Dashboard Log\r\n`))
      .pipe(startWith("---------------------------\r\n"));

    const result = output.subscribe((x) => setData((old) => (old += `${x}`)));

    return () => result.unsubscribe();
  }, [logs.data]);

  return (
    <Editor
      value={data}
      height="90vh"
      theme="ps"
      language="text"
      options={{
        lineNumbers: "off",
        lineHeight: 28,
        fontFamily: "SFProDisplay-Regular",
        fontLigatures: true,
        fontSize: 14,
        scrollBeyondLastLine: false,
      }}
    />
  );
}
