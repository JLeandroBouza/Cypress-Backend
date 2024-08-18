const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "baseUrl": "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    excludeSpecPattern: [
      "cypress/e2e/getting-started/*.js",
      "cypress/e2e/advanced-examples/*.js",
    ]
    
  },
});
