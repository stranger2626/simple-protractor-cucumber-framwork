"use strict";

const path = require('path');
const yargs = require('yargs').argv;
const logger = require('./loggerConfig.js').logger;
const reporter = require('cucumber-html-reporter');
 
const reporterOptions = {
        theme: 'bootstrap',
        jsonFile: path.join(__dirname, '../../../reports/report.json'),
        output: path.join(__dirname, '../../../reports/cucumber_report.html'),
        reportSuiteAsScenarios: true,
        launchReport: true
    };

exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    specs: [path.resolve('./test/e2e/features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: yargs.browser || 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },
    disableChecks: true,    
    directConnect: true,    
    cucumberOpts: {
        require: [path.resolve('./test/e2e/step_definitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: ['json:./reports/report.json','./node_modules/cucumber-pretty'],
        tags: yargs.tag || '@epam'
    },
    onPrepare: () => {
        logger.info('Maximizing browser window');
        browser.ignoreSynchronization = true;
        return browser.manage().window().setSize(1000, 800);
    },
    afterLaunch: () => {
        return reporter.generate(reporterOptions);
    }
};