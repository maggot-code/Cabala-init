/*
 * @Author: maggot-code
 * @Date: 2020-12-22 21:56:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2020-12-23 14:33:01
 * @Description: file content
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'indent': ['error', 4],
    'semi': 'off',
    'quotes': 'off',
    'comma-dangle': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 'off',
    'no-trailing-spaces': 'off',
    'no-unused-vars': 'off',
    'space-before-function-paren': 'off',
    'no-useless-constructor': 'off',
    'no-prototype-builtins': 'off',
    'spaced-comment': 'off',
    'eol-last': 'off',
    'prefer-const': 'off',
    "no-extend-native": 'off',
    'eqeqeq': 'off'
  }
}
