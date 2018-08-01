"use strict";
const {After, Before, Status} = require('cucumber');
const fs = require('fs');
const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

After(function (testCase) {
    if (testCase.result.status === Status.FAILED) {
        return browser.takeScreenshot().then((screenShot) => {
            let decodedImage = new Buffer(screenShot, 'base64');    
            return this.attach(decodedImage, 'image/png');
        });
    }
});