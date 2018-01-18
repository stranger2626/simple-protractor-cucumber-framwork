"use strict";
let {Then, When, Given} = require('cucumber');

When(/^I wait "([^"]*)" seconds$/, (waitTime) => {
    return browser.sleep(waitTime * 1000);
});

When(/^I open "([^"]*)" url$/, (url) => {
    return browser.get(url);
});