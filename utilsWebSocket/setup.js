const { chromium } = require('playwright');
require('dotenv').config();

const connectToBrowser = async (capability) => {

  console.log(JSON.stringify(capability, null, 2));
  console.log('LT_USERNAME:', process.env.LT_USERNAME);
  console.log('LT_ACCESS_KEY:', process.env.LT_ACCESS_KEY);
  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
  });

  return browser;
}

module.exports = {
  connectToBrowser
};