const CracoLessPlugin = require("craco-less");
const { getThemeVariables } = require("antd/dist/theme");
const fastRefreshCracoPlugin = require("craco-fast-refresh");

module.exports = {
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
