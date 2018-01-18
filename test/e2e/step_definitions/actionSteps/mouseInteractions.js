"use strict";
let {Then, When, Given} = require('cucumber');
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;

When(/^I click "([^"]*)"$/, (alias) => {
    return elementHelper(alias).click();
});