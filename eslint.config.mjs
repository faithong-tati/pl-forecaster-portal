import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', 'node_modules', '*/routeTree.gen.ts']),
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins: {
      'import': importPlugin,
      'unused-imports': unusedImports,
      perfectionist,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'import/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type',
          ],
          'newlines-between': 'always',
          'alphabetize': { order: 'asc', caseInsensitive: true },
          'pathGroups': [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          'pathGroupsExcludedImportTypes': ['builtin', 'type'],
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          vars: 'all',
        },
      ],
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array-simple',
          readonly: 'array-simple',
        },
      ],
      'no-else-return': ['error', { allowElseIf: false }],
      'no-useless-return': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'never', next: 'if', prev: 'if' },
        {
          blankLine: 'always',
          next: ['block-like', 'const', 'export', 'let', 'return', 'throw'],
          prev: '*',
        },
        {
          blankLine: 'always',
          next: '*',
          prev: ['block-like', 'const', 'let'],
        },
        { blankLine: 'never', next: 'const', prev: 'const' },
        { blankLine: 'never', next: 'let', prev: 'let' },
        {
          blankLine: 'always',
          next: '*',
          prev: ['multiline-const', 'multiline-let'],
        },
      ],
      'eqeqeq': ['error', 'always'],
      'comma-dangle': ['error', 'only-multiline'],
      'yoda': 'error',
      'perfectionist/sort-named-imports': ['error'],
      'perfectionist/sort-named-exports': ['error'],
      'perfectionist/sort-exports': ['error'],
      'perfectionist/sort-interfaces': [
        'error',
        { groupKind: 'required-first' },
      ],
    },
  },
]);
