import {Config} from 'protractor';
var HtmlReporter = require('protractor-beautiful-reporter');

export let config :Config = {
    framework: 'jasmine',
    //Selenium Address
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      browserName: 'chrome'
    },
    specs: ['sampleTestPOSpec.js'],
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },
    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'reports/screenshots'
      }).getJasmine2Reporter());
   }
  }