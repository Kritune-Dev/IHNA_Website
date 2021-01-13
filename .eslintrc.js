// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    'semi': ['error', 'never'],
    'no-unused-vars': 'warn',
  },
}
