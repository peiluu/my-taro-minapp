const path = require('path');
const { off } = require('process');

module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  globals: {
    window: true,
    document: true,
  },
  // parser: "babel-eslint",
  // typescript语法的解析器，类似于babel-eslint解析器一样。对应parserOptions的配置参考官方的README。
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],

  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // eslint规则
  rules: {
    semi: [2, 'always'], // 缩进字符串
    'import/no-unassigned-import': 0,
    // 'import/no-unresolved': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    // 'import/extensions': [2, 'never', { 'web.js': 'never', json: 'never' }],
    'import/extensions': 0,
    // 'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/no-extraneous-dependencies': 0,
    // 'import/no-unresolved': [2, { ignore: ['antd-mobile'] }],
    'import/no-unresolved': 0,

    // typescript rules fix
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': [2],
    '@typescript-eslint/no-unused-vars': [2, { varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': [2],
    // 'import/extensions': [
    //   2,
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],

    // jsx rules fix
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/no-static-element-interactions': 0,

    // airbnb rules fix
    // 'no-param-reassign': [2, { props: false }], // allow object prop mutation
    // 'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': [2, { enforceForClassFields: false }],
    'react-hooks/exhaustive-deps': 0,
  },
  settings: {
    'import/resolver': {
      typescript: path.join(__dirname, 'tsconfig.json'),
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 0,
      },
    },
  ],
};
