import type { StorybookConfig } from "@storybook/vue3-vite";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  async viteFinal(config) {
    config.resolve ??= {};
    config.resolve.alias ??= {};
    Object.assign(config.resolve.alias, {
      "@": path.resolve(__dirname, "../src"),
      "@ol": path.resolve(__dirname, "../../build/ol"),
    });
    return config;
  },
};
export default config;
