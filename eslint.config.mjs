import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const coreWebVitals = require('eslint-config-next/core-web-vitals');
const prettier = require('eslint-config-prettier');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');

const eslintConfig = [
  ...coreWebVitals,
  prettier,
  {
    plugins: {
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: tsparser,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];

export default eslintConfig;
