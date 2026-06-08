const { chromium } = require('playwright');
require('dotenv').config();

const connectToBrowser = async (capability) => {

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
  });

  return browser;
}

module.exports = {
  connectToBrowser
};