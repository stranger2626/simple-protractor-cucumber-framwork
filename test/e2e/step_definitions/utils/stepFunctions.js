const EC = protractor.ExpectedConditions;
const epamPO = require('../../po/epamPageObject.json');

    let getPageObjectElement = (alias) => {
        let pageElement = epamPO[alias];
        if (pageElement['isCollection'] === true) {
            pageElement = element.all(by.css(pageElement.selector));
            return pageElement;
        }
        else {
            pageElement = element(by.css(pageElement.selector));
            return pageElement;
        }
    };

    let expectedCondition = (shouldBe) => {
        let expectedConditionFunction;
    
        switch (shouldBe) {
            case "present":
                expectedConditionFunction = EC.presenceOf.bind(EC);
                break;
            case "clickable":
                expectedConditionFunction = EC.elementToBeClickable.bind(EC);
                break;
            case "visible":
                expectedConditionFunction = EC.visibilityOf.bind(EC);
                break;
            case "invisible":
                expectedConditionFunction = EC.invisibilityOf.bind(EC);
                break;
            case "selected":
                expectedConditionFunction = EC.elementToBeSelected.bind(EC);
                break;
            case "gone":
                expectedConditionFunction = EC.stalenessOf.bind(EC);
                break;
            default:
                throw new Error("Wrong expected condition provided.");
        }
        return expectedConditionFunction;
    };

    let highlightElement = (alias) => {
        let styleOptions = "color: Red; border: 2px solid red;";
        let webElement = getPageObjectElement(alias).getWebElement();
        return browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", webElement, styleOptions).then(() => {
            return browser.wait(() => {
                return getPageObjectElement(alias).getCssValue('border').then((border) => {
                    console.log(border.toString());
                    return border.toString().indexOf('2px solid rgb(255,') > -1;
                });
            }, 5000, 'Style is not applied!');
        }, (error)=> {
            console.log('Error is: ' + error);
        });
    };

    module.exports = {
        getPageObjectElement,
        expectedCondition,
        highlightElement
    }