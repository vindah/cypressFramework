const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hJqw5rq",
  chromeWebSecurity: false,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  execTimeout: 10000,
  env: {
    url: 'https://www.saucedemo.com/',
  },
  viewportHeight: 960,
  viewportWidth: 1600,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
