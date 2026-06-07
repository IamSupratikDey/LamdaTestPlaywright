const {test, expect} = require('@playwright/test');
const { navigateToSeleniumPlayground } = require('../tests/utils/Navigation');
const { connectToBrowser } = require('../utilsWebSocket/setup');
const { teardown } = require('../utilsWebSocket/tearDown');

test('Verify simple form demo', async ({ browserName }) => {

    const capabilities=require('../configue/capabilities');
    const capability = capabilities.find(cap => cap.browserName.toLowerCase() === browserName.toLowerCase());
    if (!capability) {  
        throw new Error(`No capabilities found for browser: ${browserName}`);
    };  
    const browser = await connectToBrowser(capability);
    const page = await browser.newPage();
    await navigateToSeleniumPlayground(page);
    await page.click('a[href*="simple-form-demo"]');
    await expect(page).toHaveURL(/.*simple-form-demo.*/);
    const message = 'Welcome to TestMu AI';
    await page.locator('input[id="user-message"]').pressSequentially(message);
    console.log(await page.locator('input[id="user-message"]').inputValue());
    await page.waitForTimeout(3000);
    await page.locator('#showInput').click();
    
    try {
    await expect(page.locator('#message')).toHaveText(message);
    // Mark the test as completed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
  } catch {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
  }

   
});