import json from '@eslint/json';
import markdown from '@eslint/markdown';
import html from '@html-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import lit from 'eslint-plugin-lit';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // 1. Base ESLint and TypeScript configurations

  {
    ignores: ['dist/', 'node_modules/', 'eslint.config.ts'],
  },
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,

  // 2. Global settings for all files

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // 3. Configuration for TypeScript files

  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      lit: lit,
      '@html-eslint': html,
    },
    rules: {
      'lit/no-duplicate-template-bindings': 'error',
      'lit/no-invalid-html': 'error',
      '@html-eslint/no-trailing-spaces': 'off',
    },
  },

  // 4. Configuration for JSON

  {
    files: ['src/**/*.jsonc', 'src/**/*.json'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },

  // 5. Configuration for Markdown

  {
    files: ['src/**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
  },

  // 6. Prettier integration

  eslintConfigPrettier,
]);
