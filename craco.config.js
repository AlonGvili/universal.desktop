const CracoLessPlugin = require("craco-less");
const { getThemeVariables } = require("antd/dist/theme");
const fastRefreshCracoPlugin = require("craco-fast-refresh");
// const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  webpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "node_modules/monaco-editor/min/vs",
            to: "vs",
            globOptions: {
              ignore: [
                "**/editor/editor.main.nls.de.js",
                "**/editor/editor.main.nls.es.js",
                "**/editor/editor.main.nls.fr.js",
                "**/editor/editor.main.nls.it.js",
                "**/editor/editor.main.nls.ja.js",
                "**/editor/editor.main.nls.ko.js",
                "**/editor/editor.main.nls.ru.js",
                "**/editor/editor.main.nls.zh-cn.js",
                "**/editor/editor.main.nls.zh-tw.js",
                "**/basic-languages/**",
                "**/language/**"
              ],
            },
          },
          {
            from:
              "node_modules/monaco-editor/min/vs/basic-languages/powershell",
            to: "vs/basic-languages/powershell",
          },
        ],
      }),
    ],
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      fastRefreshCracoPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: getThemeVariables({
              dark: true,
            }),
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
