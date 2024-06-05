

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'consistent-return': 'error',
    'css-modules/no-undef-class': 'off',
    'deprecation/deprecation': 'warn',
    'import/no-anonymous-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-confusing-arrow': 0,
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],
    'no-shadow': 0,
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-useless-fragment': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'prettier/prettier': 'error',
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      files: ['**/?(*.)+(spec).ts?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  plugins: [
    'prettier',
    'jest',
    'testing-library',
    '@typescript-eslint',
    'deprecation',
    'import',
    'react',
    'tailwindcss',
  ],
};