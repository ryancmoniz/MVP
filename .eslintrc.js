module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'react/prop-types': 0,
    'no-console': 'off',
  },
};
