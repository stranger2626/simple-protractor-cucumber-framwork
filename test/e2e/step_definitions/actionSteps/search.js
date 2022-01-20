const { When, Then, setDefaultTimeout } = require('cucumber');
const logger = require('../../config/loggerConfig.js').logger;
const { expect } = require('chai');

setDefaultTimeout(60000);


When(/^I click on Search button$/, async function() {
    logger.info(`I'm on the Search screen`);
    await browser.manage().window().maximize();
    await browser.get('https://www.epam.com/');
    await element(by.className('header-search__button header__icon')).click();
});

When(/^I search by "([^"]*)" word$/, async function(word) {
    logger.info(`I search by ${word} word`);
    await element(by.className('header-search__input frequent-searches__input')).click().sendKeys(word);
    await element(by.className('header-search__submit')).click();
});

Then(/^Page title should partially contains "([^"]*)"$/, async function(title) {
    logger.info(`Page title consist of ${title}`);
    let resultField = await element(by.className('search-results__counter')).getText();
    browser.sleep(60000);
    return expect(resultField).to.include(title);
});