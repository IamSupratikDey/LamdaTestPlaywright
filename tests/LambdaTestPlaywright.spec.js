const { test, expect } = require('@playwright/test');
const { navigateToSeleniumPlayground } = require('../tests/utils/Navigation');
const { connectToBrowser } = require('../utilsWebSocket/setup');
const { teardown } = require('../utilsWebSocket/tearDown');

test('Verify simple form demo', async ({ browserName }) => {

  const capabilities = require('../configue/capabilities');
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
  await page.locator('#showInput').click();

  try {
    await expect(page.locator('#message')).toHaveText(message);
    // Mark the test as completed or failed
    await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
  } catch {
    await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
  }


});


test('Drag & Drop Sliders', async ({ browserName }) => {

  const capabilities = require('../configue/capabilities');
  const capability = capabilities.find(cap => cap.browserName.toLowerCase() === browserName.toLowerCase());
  if (!capability) {
    throw new Error(`No capabilities found for browser: ${browserName}`);
  };
  const browser = await connectToBrowser(capability);
  const page = await browser.newPage();
  await navigateToSeleniumPlayground(page);
  await page.click('a[href*="drag-drop-range-sliders"]');

  const slider = page.locator("input[value='15']");

  // Set slider to 95
  await slider.evaluate((el) => {
    el.value = 95;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });

  // Validate displayed value


  try {
    await expect(page.locator('#rangeSuccess')).toHaveText('95');
    // Mark the test as completed or failed
    await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
  } catch {
    await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
  }


});


test('Input Form Submit Validation', async ({ browserName }) => {

  const capabilities = require('../configue/capabilities');
  const capability = capabilities.find(cap => cap.browserName.toLowerCase() === browserName.toLowerCase());
  if (!capability) {
    throw new Error(`No capabilities found for browser: ${browserName}`);
  };
  const browser = await connectToBrowser(capability);
  const page = await browser.newPage();
  await navigateToSeleniumPlayground(page);
  await page.getByRole('link', { name: 'Input Form Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  const nameField = page.locator('#name');
  await expect(nameField).toBeFocused();
  const validationMessage = await nameField.evaluate(
    el => el.validationMessage
  );
  expect(validationMessage).toContain('Please fill');
  await page.locator('#name').fill('John Doe');
  await page.locator('#inputEmail4').fill('john@test.com');
  await page.locator('#inputPassword4').fill('Password123');
  await page.locator('#company').fill('ABC Company');
  await page.locator('#websitename').fill('https://abc.com');
  await page.locator('select[name="country"]').selectOption({
    label: 'United States'
  });
  await page.locator('#inputCity').fill('New York');
  await page.locator('#inputAddress1').fill('123 Main Street');
  await page.locator('#inputAddress2').fill('Suite 100');
  await page.locator('#inputState').fill('New York');
  await page.locator('#inputZip').fill('10001');
  await page.getByRole('button', { name: 'Submit' }).click();

  try {
    await expect(
      page.getByText(
        'Thanks for contacting us, we will get back to you shortly.'
      )
    ).toBeVisible();
    await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
  } catch {
    await page.evaluate(_ => { }, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
  }
});