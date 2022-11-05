const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wgnie7",
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
// npx cypress run --record --key c19b0be2-5a46-4c91-a3da-8b2eceef3bd4

require('@applitools/eyes-cypress')(module);
