const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.saucedemo.com/v1/',
    chromeWebSecurity: false,
    viewportHeight:800,
    viewportWidth:1500,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/testCases/*.js'
  },
});
