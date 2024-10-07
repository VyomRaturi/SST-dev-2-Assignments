const puppeteer = require('puppeteer');

let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({
    executablePath: process.env.CHROMIUM_PATH,
    args: ['--no-sandbox'],
  });
});

afterAll(async () => {
  await browser.close();
});

test('should return the first resolved task', async () => {
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/');

  // Extract the JavaScript code from the <script> tag
  const scriptContent = await page.$eval('script', el => el.textContent);

  // Evaluate the extracted JavaScript code and call fetchFirstResolvedData
  const result = await page.evaluate(async (scriptContent) => {
    eval(scriptContent); // Inject the script content into the page context
    return await fetchFirstResolvedData(); // Call the function defined in the script
  }, scriptContent);

  // Verify the result
  expect(result).toMatch(/Task [1-3] complete/);
});