const { addReactRefresh } = require('customize-cra-react-refresh');

const { override, addLessLoader, addBabelPlugins } = require('customize-cra');

module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        localIdentName: '[local]--[hash:base64:5]',
        modifyVars: {
          'primary-color': '#fb4390',
        },
      },
    }),
    ...addBabelPlugins('babel-plugin-styled-components'),
    addReactRefresh(),
  ),
};
