const { When, Then, setDefaultTimeout } = require('cucumber');
const logger = require('../../config/loggerConfig.js').logger;
const { expect } = require('chai');

setDefaultTimeout(60000);


When(/^I click on change-language button$/, async function() {
    logger.info(`Change-language menu is expanded`);
    await browser.manage().window().maximize();
    await browser.get('https://www.epam.com/');
    await element(by.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[2]/div/button')).click();
});

When(/^I select language$/, async function() {
    logger.info(`Russian language is selected`);
    browser.sleep(5000);
    await element(by.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[2]/div/nav/ul/li[2]/a')).click();
});

Then(/^Page title should be translated on selected language$/, async function() {
    logger.info(`Page title should be translated into Russian`);
    const pageTitle = await browser.getTitle();
    browser.sleep(5000);
	expect(pageTitle).to.be.equal('EPAM | Enterprise Software Development, Design & Consulting');
    browser.sleep(5000);
});