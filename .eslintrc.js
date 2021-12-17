/* eslint-disable prettier/prettier */
module.exports = {
  env: {
    browser: true,
    es2020: true,
    commonjs: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['html'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        parser: 'flow',
        endOfLine: 'auto',
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 120,
        arrowParens: 'avoid',
      },
    ],
  },
}
