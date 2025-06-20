import path from "path";

import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",

  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@shared",
        replacement: path.resolve(__dirname, "src/shared"),
      },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      {
        find: "@contexts",
        replacement: path.resolve(__dirname, "src/contexts"),
      },
      {
        find: "@config",
        replacement: path.resolve(__dirname, "src/config"),
      },
      { find: "@lang", replacement: path.resolve(__dirname, "src/lang") },
      {
        find: "@sections",
        replacement: path.resolve(__dirname, "src/sections"),
      },
    ],
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      },
    }),
    sentryVitePlugin({
      org: "gildo-junior",
      project: "portfolio",
    }),
  ],

  build: {
    sourcemap: true,
  },
});
