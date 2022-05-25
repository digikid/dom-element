module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint', 'jest'],
  settings: {
    'import/resolver': 'webpack',
  },
  extends: ['airbnb-base'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-base', 'airbnb-typescript/base'],
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.test.json'],
      },
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
      },
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
  },
};
