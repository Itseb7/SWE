const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // افتح صفحة الدفع
  await page.goto('file://' + __dirname + '/../payment.html');

  await page.fill('#name', 'Test User');
  await page.fill('#card-number', '1234567812345678');
  await page.fill('#expiry', '12/30');
  await page.fill('#cvv', '123');

  await page.click('.main-btn');

  await page.waitForSelector('#success-msg', { timeout: 3000 });

  console.log('✓ Payment test script ran successfully');

  await browser.close();
})();
