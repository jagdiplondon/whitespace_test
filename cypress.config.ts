import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    baseUrl: "https://www.whitespace.co.uk",
    username: "",
    password: "",
  },

  e2e: {
    specPattern: "**/*.cy.feature",

    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      const browserify = require("@cypress/browserify-preprocessor");
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve("typescript"),
      };
      options.browserifyOptions.transform[1][1].babelrc = true;
      on("file:preprocessor", browserify(options));
      on("file:preprocessor", cucumber(options));
    },
  },
});
