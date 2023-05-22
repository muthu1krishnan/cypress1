module.exports = {
  reporter: 'cypress-mochawesome-reporter', // html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('cypress-mochawesome-reporter/plugin') (on);//for html reporter
    },
  },
};
