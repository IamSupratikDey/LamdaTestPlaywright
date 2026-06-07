const {test, expect} = require('@playwright/test');
const { navigateToSeleniumPlayground } = require('../tests/utils/Navigation');


test('Verify simple form demo', async ({ page }) => {
    await navigateToSeleniumPlayground(page);
    await page.click('a[href*="simple-form-demo"]');
    await expect(page).toHaveURL(/.*simple-form-demo.*/);
    const message = 'Welcome to TestMu AI';
    await page.locator('input[id="user-message"]').pressSequentially(message);
    console.log(await page.locator('input[id="user-message"]').inputValue());
    await page.waitForTimeout(3000);
    await page.locator('#showInput').click();
    await expect(page.locator('#message')).toHaveText(message);
   
});