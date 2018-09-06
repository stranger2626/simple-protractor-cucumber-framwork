"use strict";

const path = require('path');
const yargs = require('yargs').argv;
const logger = require('./loggerConfig.js').logger;

exports.config = {
    allScriptsTimeout: 200000,
    getPageTimeout: 200000,
    specs: [path.resolve('./test/e2e/features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: yargs.browser || 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1
    },
    disableChecks: true,
    cucumberOpts: {
        require: [path.resolve('./test/e2e/step_definitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: 'json:./reports/report.json',
        tags: yargs.tag || '@epam'
    },
    onPrepare: () => {
        logger.info('Maximizing browser window');
        browser.ignoreSynchronization = true;
        browser.manage().window().setSize(1000, 800);
    }
};