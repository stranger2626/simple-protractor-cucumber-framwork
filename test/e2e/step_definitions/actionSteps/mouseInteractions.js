"use strict";
let {Then, When, Given} = require('cucumber');
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const logger = require('../../config/loggerConfig.js').logger;

When(/^I click "([^"]*)"$/, (alias) => {
    logger.info(`I click ${alias}`);
    return elementHelper(alias).click();
});