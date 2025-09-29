import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import vuePlugin from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["src/**/*.{ts,vue}"],
    ignores: ["dist", "node_modules"],
    languageOptions: {
      parser: vueParser, // main parser for .vue files
      parserOptions: {
        parser: tsParser, // parser for <script setup lang="ts">
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"], // ensures TS parser sees .vue files
      },
    },
    plugins: {
      vue: vuePlugin,
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Vue rules
      "vue/multi-word-component-names": "off",
      "vue/no-multiple-template-root": "error",

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "off",

      // Prettier integration
      "prettier/prettier": "error", // shows Prettier issues as ESLint errors
    },
  },
];
