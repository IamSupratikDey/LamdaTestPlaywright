
import { defineConfig, devices } from '@playwright/test';
const capabilities = require('./configue/capabilities');


export default defineConfig({
  testDir: './tests',
  
  timeout : 100 * 1000, 

  expect: {
    timeout: 5 * 1000,
    
  },
   reporter: 'html',

  use: {
   
    
     headless: true,
     screenshot: 'on',
     trace: 'on'

     
},

projects: capabilities.map(capability =>({
  name: capability["LT:Options"]["name"],
  use:{
    browserName: capability.browserName,
    ...capability["LT:Options"]
  },
})),
 
});

