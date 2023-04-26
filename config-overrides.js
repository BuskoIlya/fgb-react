const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@api': 'src/api',
    '@components': 'src/components',
    '@css': 'src/css',
    '@hooks': 'src/hooks',
    '@modules': 'src/modules',
    '@pages': 'src/pages',
    '@router': 'src/router',
    '@store': 'src/store',
    '@util': 'src/util',
  })(config);

  return config;
};
