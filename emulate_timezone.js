const puppeteer = require('puppeteer');

(async () => {
	// set some options (set headless to false so we can see 
	// this automated browsing experience)
	let launchOptions = { headless: false, args: ['--start-maximized'] };
	
	const browser = await puppeteer.launch(launchOptions);
	const page = await browser.newPage();

	// set viewport and user agent (just in case for nice viewing)
	await page.setViewport({width: 1366, height: 768});
	await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');

	// emulate to Asia/Jakarta a.k.a GMT+7
	await page.emulateTimezone('Asia/Makassar');

	// go to the web
	await page.goto('https://whatismytimezone.com');

	// close the browser
	// await browser.close();
})();
