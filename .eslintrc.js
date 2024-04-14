module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'prettier'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'quote-props': ['error', 'as-needed']
  },
  env: {
    node: true,
    jest: true,
  },
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.js'],
    },
    {
      files: ['test/**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.test.json',
      },
    }
  ],
};
