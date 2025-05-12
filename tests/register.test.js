const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // افتح صفحة المشروع
  await page.goto('file://' + __dirname + '/../index.html');

  await page.evaluate(() => {
    document.getElementById('signup').style.display = 'block';
    document.getElementById('signIn').style.display = 'none';
  });

  await page.fill('#fName', 'Test');
  await page.fill('#lName', 'User');
  await page.fill('#rEmail', 'newuser@example.com');
  await page.fill('#rPassword', 'Test1234!');

  await page.click('#submitSignUp');

  console.log('✓ Register test script ran successfully');

  await browser.close();
})();
