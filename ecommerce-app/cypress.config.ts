import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5173/",
    env: {
      username: "atuny0",
      password: "9uQFF1Lh",
    }
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
