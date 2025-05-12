const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // افتح الصفحة
  await page.goto('file://' + __dirname + '/../ticket.html');

  await page.click('text=Regular Ticket - 4 SAR'); // تأكد من ظهور العنصر
  await page.click('button:has-text("+")'); // أول + هو لتذكرة Regular

  const count = await page.textContent('#regular-count');
  if (count !== '1') {
    console.error(`✗ Expected 1 regular ticket but got ${count}`);
    process.exit(1);
  }

  await page.click('.main-btn');

  console.log('✓ Ticket selection test script ran successfully');

  await browser.close();
})();
