import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://bsw.iitd.ac.in/', { waitUntil: 'networkidle0' });
  
  // Extract full HTML of body
  const html = await page.evaluate(() => document.body.innerHTML);
  
  fs.writeFileSync('bsw_dump.html', html);
  
  console.log('Dumped HTML to bsw_dump.html');
  await browser.close();
})();
