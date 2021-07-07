module.exports = {
  extends: '../../config/eslint.js',
  parserOptions: {
    project: ['./tsconfig.json']
  },
  rules: {
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    'no-redeclare': 'off',
    'no-undef': 'off' // temporary until fixed: 'NodeJS' is not defined
  }
}
