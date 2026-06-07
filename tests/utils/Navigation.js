const {test, expect} = require('@playwright/test');

async function navigateToSeleniumPlayground(page) {
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.waitForLoadState('networkidle');
}


module.exports = { navigateToSeleniumPlayground };