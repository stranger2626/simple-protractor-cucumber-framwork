"use strict";
let {Then, When, Given} = require('cucumber');
const highlightElement = require('../utils/stepFunctions.js').highlightElement;

When(/^I wait "([^"]*)" seconds$/, (waitTime) => {
    return browser.sleep(waitTime * 1000);
});

When(/^I open "([^"]*)" url$/, (url) => {
    return browser.get(url);
});

When(/^I highlight "([^"]*)"$/, (alias) => {
    return highlightElement(alias);
});