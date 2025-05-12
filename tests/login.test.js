const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // افتح صفحة المشروع
  await page.goto('file://' + __dirname + '/../index.html');

  await page.waitForSelector('#signIn');

  await page.fill('#email', 'test@example.com');
  await page.fill('#password', 'Test1234!');

  await page.click('#submitSignIn');

  console.log('✓ Login test script ran successfully');

  await browser.close();
})();
