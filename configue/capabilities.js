module.exports =[
   {
	"browserName": "Chrome",
	"browserVersion": "148.0",
	"LT:Options": {
    'build': 'Playwright Sample Build',
      'name': 'Playwright Test for Windows 10 for Chrome',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
		"video": true,
		"platform": "Windows 10",
		"console": true
    }
   },

   {
	"browserName": "MicrosoftEdge",
	"browserVersion": "148.0",
	"LT:Options": {
        'build': 'Playwright Sample Build',
      'name': 'Playwright Test for Windows 10 for MicrosoftEdge',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
		"video": true,
		"platform": "Windows 10",
		"console": true
	}
},
   {
	"browserName": "pw-firefox",
	"browserVersion": "146.0",
	"LT:Options": {
        'build': 'Playwright Sample Build',
      'name': 'Playwright Test for Windows 10 for w-firefox',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
		"video": true,
		"platform": "Windows 10",

		"console": true
	}
},

 {
	"browserName": "Chrome",
	"browserVersion": "148.0",
	"LT:Options": {
        'build': 'Playwright Sample Build',
      'name': 'Playwright Test for macOS Sonoma for Chrome',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
		"video": true,
		"platform": "macOS Sonoma",
	
		"console": true
	}
}
]