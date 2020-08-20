process.env.NODE_ENV = 'development';
require('react-scripts/config/env');
const pkg = require('./../package.json');

module.exports = {
  overwrite: true,
  schema: [`${pkg.proxy}${process.env.REACT_APP_API_URL}`],
  generates: {
    'schema/schema.json': {
      plugins: ['introspection'],
      config: {
        minify: false,
      },
    },
    'schema/schema.graphql': {
      plugins: ['schema-ast'],
    },
    'src/apollo/possibleTypes.json': {
      plugins: ['fragment-matcher'],
    },
  },
  config: {
    namingConvention: 'keep',
    apolloClientVersion: 3,
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
};
