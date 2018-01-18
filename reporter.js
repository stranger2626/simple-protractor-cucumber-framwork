let reporter = require('cucumber-html-reporter');
 
let options = {
        theme: 'bootstrap',
        jsonFile: './reports/report.json',
        output: './reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true
    };
 
reporter.generate(options);