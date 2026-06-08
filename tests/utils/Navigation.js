const {test, expect} = require('@playwright/test');

async function navigateToSeleniumPlayground(page) {
    await page.goto('https://www.testmuai.com/selenium-playground/');
  
}


module.exports = { navigateToSeleniumPlayground };