import React, { useEffect, useRef, Fragment } from "react";
import { Card } from "antd";
import Editor from "components/Editor";
import { editor } from "monaco-editor";
import { useSize } from "ahooks";
import { Dashboard } from "types";
import { Button, message } from "antd/es";
import useContentProvider from "context/content/Provider";
import {
  PicCenterOutlined,
  PicLeftOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  SaveOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { useClipboard } from "use-clipboard-hook";

export default function DashboardEditor(props: {
  dashboard: Dashboard | undefined;
}) {
  const { dashboard } = props;
  const [{ left }, dispatch] = useContentProvider();
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const ref = useRef<HTMLDivElement>(null);
  const { height, width } = useSize(ref);
  
  const { copy: copyEditorContent } = useClipboard({
    onSuccess: (text) => message.info(`Editor content copied.`),
  });

  useEffect(() => editorRef.current?.layout(), [width, height]);

  return (
    <div ref={ref}>
      <Card
        bordered={false}
        bodyStyle={{ padding: 0 }}
        extra={
          // <Space size="middle">
          <Fragment>
            {/* <Space size="small"> */}
            <Button
              type="text"
              icon={
                <ZoomInOutlined
                  style={{ color: "rgba(255, 255, 255, 0.45)" }}
                />
              }
              onClick={() =>
                editorRef.current?.trigger(
                  "keyboard",
                  "editor.action.fontZoomIn",
                  {}
                )
              }
            />
            <Button
              type="text"
              icon={
                <ZoomOutOutlined
                  style={{ color: "rgba(255, 255, 255, 0.45)" }}
                />
              }
              onClick={() =>
                editorRef.current?.trigger(
                  "keyboard",
                  "editor.action.fontZoomOut",
                  {}
                )
              }
            />
            {/* </Space> */}
            {/* <Divider orientation="center" type="vertical" /> */}
            <Button
              type="text"
              icon={
                <SaveOutlined style={{ color: "rgba(255, 255, 255, 0.45)" }} />
              }
              onClick={() =>
                editorRef.current?.trigger(
                  "keyboard",
                  "editor.action.fontZoomIn",
                  {}
                )
              }
            />
            <Button
              type="text"
              icon={
                <CopyOutlined style={{ color: "rgba(255, 255, 255, 0.45)" }} />
              }
              onClick={() => copyEditorContent(dashboard?.content)}
            />
            {/* <Divider orientation="center" type="vertical" /> */}
            <Button
              type="text"
              icon={
                left.isExpanded ? <PicLeftOutlined /> : <PicCenterOutlined />
              }
              onClick={() =>
                dispatch({
                  type: left.isExpanded ? "RESET" : "EXPAND_LEFT",
                })
              }
            />
          </Fragment>
        }
      >
        <Editor
          data={dashboard || ({} as Dashboard)}
          editorProps={{
            theme: "ps",
            value: dashboard?.content,
            options: {
              wordWrap: "on",
              wrappingIndent: "indent",
              minimap: {
                enabled: false,
              },
              fontFamily: "SFProDisplay-Regular",
              lineHeight: 28,
              lineNumbersMinChars: 3,
              scrollBeyondLastLine: true,
            },
            height: "90vh",
          }}
          ref={editorRef}
        />
      </Card>
    </div>
  );
}
