module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'implicit-dependencies', 'prettier'],
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns: ['node_modules/', 'dist/', 'dist.browser/', 'coverage/', 'prettier.config.js', 'typedoc.js', 'test-build/', 'karma.conf.js'],
  extends: ['typestrict', 'eslint:recommended'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'implicit-dependencies/no-implicit': [
      'error',
      { peer: true, dev: true, optional: true },
    ],
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
          selector: 'interface',
          format: ['PascalCase', 'camelCase'],
          custom: {
              regex: '^I[A-Z]',
              match: false,
          }
      }
    ],
    'prettier/prettier': 'error',
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  },
};
