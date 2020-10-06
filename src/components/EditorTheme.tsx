import { editor } from "monaco-editor";

const ps: editor.IStandaloneThemeData = {
  base: "vs-dark" as editor.BuiltinTheme,
  inherit: true,
  rules:[],
//   rules: [
//     {
//       token: "comment",
//       foreground: "#006400",
//     },
//     {
//       token: "punctuation.definition.comment",
//       foreground: "#006400",
//     },
//     {
//       token: "comment.block.preprocessor",
//       foreground: "#006400",
//     },
//     {
//       token: "comment.block.documentation",
//       foreground: "#006400",
//     },
//     {
//       token: "comment.documentation",
//       foreground: "#006400",
//     },
//     {
//       token: "invalid.deprecated",
//       background: "#96000014",
//     },
//     {
//       token: "invalid.illegal",
//       foreground: "#660000",
//     },
//     {
//       token: "keyword.operator",
//       foreground: "#A9A9A9",
//     },
//     {
//       token: "storage",
//       foreground: "#00008B",
//     },
//     {
//       token: "keyword",
//       foreground: "#00008B",
//     },
//     {
//       token: "support.type",
//       foreground: "#00008B",
//     },
//     {
//       token: "storage.type",
//       foreground: "#00008B",
//     },
//     {
//       token: "variable.language",
//       foreground: "#008080",
//     },
//     {
//       token: "support.constant",
//       foreground: "#008080",
//     },
//     {
//       token: "constant.language",
//       foreground: "#008080",
//     },
//     {
//       token: "variable",
//       foreground: "#FF4500",
//     },
//     {
//       token: "support.variable",
//       foreground: "#FF4500",
//     },
//     {
//       token: "punctuation.definition.variable.powershell",
//       foreground: "#FF4500",
//     },
//     {
//       token: "variable.other.readwrite.powershell",
//       foreground: "#FF4500",
//     },
//     {
//       token: "support.function",
//       foreground: "#0000FF",
//     },
//     {
//       token: "support.function",
//       foreground: "#0000FF",
//     },
//     {
//       token: "entity.name.type",
//       foreground: "#7A3E9D",
//     },
//     {
//       token: "entity.other.inherited-class",
//       foreground: "#7A3E9D",
//     },
//     {
//       token: "support.class",
//       foreground: "#7A3E9D",
//     },
//     {
//       token: "entity.name.exception",
//       foreground: "#660000",
//     },
//     {
//       token: "constant.numeric",
//       foreground: "#800080",
//     },
//     {
//       token: "constant.character",
//       foreground: "#800080",
//     },
//     {
//       token: "constant",
//       foreground: "#800080",
//     },
//     {
//       token: "string",
//       foreground: "#8B0000",
//     },
//     {
//       token: "constant.character.escape",
//       foreground: "#8B0000",
//     },
//     {
//       token: "string.regexp",
//       foreground: "#8B0000",
//     },
//     {
//       token: "constant.other.symbol",
//       foreground: "#8B0000",
//     },
//     {
//       token: "punctuation",
//       foreground: "#000000",
//     },
//   ],
  colors: {
    "activityBar.background": "#E1ECF9",
    "activityBar.foreground": "#A9A9A9",
    "editor.background": "#141414",
    "editor.foreground": "#000000",
    "activityBarBadge.background": "#A9A9A9",
    "editor.lineHighlightBackground": "#add8e6",
    "editor.selectionBackground": "#94c6f7",
  },
};

export default ps;
