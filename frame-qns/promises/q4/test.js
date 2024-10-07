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

test('should perform operations in sequence and handle errors', async () => {
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/');

  // Extract the JavaScript code from the <script> tag
  const scriptContent = await page.$eval('script', el => el.textContent);

  // Evaluate the extracted JavaScript code and call performOperations
  const result = await page.evaluate(async (scriptContent) => {
    eval(scriptContent); // Inject the script content into the page context
    try {
      const res = await performOperations(); // Call the function defined in the script
      return res;
    } catch (error) {
      return error.message;
    }
  }, scriptContent);

  // Verify the result
  expect(result === "Operation 3 complete" || result === "Failed to complete operations").toBe(true);
});