"use strict";
let {Then, When, Given} = require('cucumber');
const expect = require('chai').expect;
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const stepFunctions = require('../utils/stepFunctions.js')

Then(/^"([^"]*)" should( not)? be visible$/, async (alias, notArg) => {
    let element = elementHelper(alias);
    let result = await element.isPresent();
    return expect(result).to.be.equal(!notArg);
});

Then(/^Count of "([^"]*)" should( not)? be "([^"]*)"$/, async (alias, notArg, expectedNumber) => {
    let element = elementHelper(alias);
    let result = await element.count();
    expectedNumber = parseInt(expectedNumber);
    if (notArg) {
        return expect(result).to.not.equal(expectedNumber);   
    }
    else {
        return expect(result).to.equal(expectedNumber);
    }
});

Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
    let element = elementHelper(alias);
    let elementText = await element.getText();
    return expect(elementText.indexOf(textToContain)).to.not.equal(-1);    
});