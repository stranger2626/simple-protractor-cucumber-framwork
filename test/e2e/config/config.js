"use strict";

const path = require('path');

exports.config = {
    allScriptsTimeout: 200000,
    getPageTimeout: 200000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [path.resolve('./test/e2e/features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    ignoreUncaughtExceptions: true,
    browser: 'chrome',
    cucumberOpts: {
        require: [path.resolve('./test/e2e/step_definitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: 'json:report.json'
    },
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    }
};
