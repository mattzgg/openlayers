// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import storybook from 'eslint-plugin-storybook';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  {
    files: ['src/**/*.{ts,vue}', '.storybook/**/*.ts'],
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      parser: vueParser, // main parser for .vue files
      parserOptions: {
        parser: tsParser, // parser for <script setup lang="ts">
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'], // ensures TS parser sees .vue files
      },
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      // Vue rules
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'error',

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',

      // Prettier integration
      'prettier/prettier': 'error', // shows Prettier issues as ESLint errors

      // import plugin rules
      'import/no-unresolved': 'error',
      'import/order': ['warn', { groups: ['builtin', 'external', 'internal'] }],
    },
    settings: {
      'import/resolver': {
        typescript: {
          // point to your tsconfig.json
          project: './tsconfig.json',
        },
      },
    },
  },
  ...storybook.configs['flat/recommended'],
];
