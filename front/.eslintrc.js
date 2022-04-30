module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 2015,
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/no-array-index-key': 0,
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/jsx-fragments': 0,
    'react/jsx-no-bind': 0,
    'no-undef': 0,
    'no-alert': 0,
    'no-shadow': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'func-names': 0,
    camelcase: 0,
  },
};
