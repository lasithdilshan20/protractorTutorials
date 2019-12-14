import {Config} from 'protractor';

export let config :Config = {
    framework: 'jasmine',
    //Selenium Address
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['sampleTestSpec_2.js']
  }