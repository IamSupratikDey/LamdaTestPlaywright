const {chromium} = require('playwright');

const connectToBrowser = async (capability) => {

    const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capability=${encodeURIComponent(JSON.stringify(capability))}`
  });

  return browser;
}

module.exports = {
    connectToBrowser
}   ;