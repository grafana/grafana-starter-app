module.exports = {
  extends: [
    '@grafana/eslint-config',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
  },
};
