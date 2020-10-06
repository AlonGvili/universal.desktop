import React, { PropsWithChildren } from "react";
import { monaco, EditorProps, ControlledEditor } from "@monaco-editor/react";
// eslint-disable-next-line
import { editor } from "monaco-editor";
import { Alert } from "antd";
import { useUpdateDashboard } from "service-hooks";
import { Dashboard } from "types";
import ps from "components/EditorTheme"

monaco.config({ paths: { vs: "/vs" } });

const Editor = React.forwardRef(
  (
    props: PropsWithChildren<{ editorProps: EditorProps; data: Dashboard }>,
    ref: any
  ) => {
    const [updateDashboard] = useUpdateDashboard();

    function onChange(value: any) {
      updateDashboard({
        ...props.data,
        content: value,
      });
      return value;
    }

    return (
      <Alert.ErrorBoundary>
        <ControlledEditor
          {...props.editorProps}
          language="powershell"
          editorDidMount={(_, editor: editor.IStandaloneCodeEditor) => {
            monaco.init().then((x) => {
              let modal = x.editor.createModel(
                props.data?.content,
                "powershell"
              );
              x.editor.defineTheme("ps", ps)
              x.editor.setTheme("ps")  
              editor.setModel(null);
              editor.setModel(modal);
            });
            ref.current = editor;
          }}
          onChange={(_, value) => onChange(value)}
        />
      </Alert.ErrorBoundary>
    );
  }
);

export default Editor;
