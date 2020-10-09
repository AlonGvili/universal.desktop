import { editor } from "monaco-editor";

const ps: editor.IStandaloneThemeData = {
  base: "vs-dark" as editor.BuiltinTheme,
  inherit: true,
  rules: [],
  colors: {
    "activityBar.background": "#E1ECF9",
    "activityBar.foreground": "#A9A9A9",
    "editor.background": "#141414",
    "editor.foreground": "#000000",
    "activityBarBadge.background": "#A9A9A9",
    "editor.lineHighlightBackground": "#303030",
    "editor.selectionBackground": "#303030",
  },
};

export default ps;
