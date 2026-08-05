import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://bsw.iitd.ac.in/', { waitUntil: 'networkidle0' });
  
  // Extract text and basic structure
  const structure = await page.evaluate(() => {
    function getStructure(element, depth = 0) {
      if (depth > 6) return null; // limit depth
      let obj = {
        tag: element.tagName,
        class: element.className,
        text: element.innerText?.substring(0, 100).trim(),
        children: []
      };
      
      for (const child of element.children) {
        if (['DIV', 'NAV', 'HEADER', 'FOOTER', 'SECTION', 'UL', 'LI', 'A', 'H1', 'H2', 'H3', 'P'].includes(child.tagName)) {
           const childStruct = getStructure(child, depth + 1);
           if (childStruct && (childStruct.text || childStruct.children.length > 0)) {
               obj.children.push(childStruct);
           }
        }
      }
      return obj;
    }
    return getStructure(document.body);
  });
  
  console.log(JSON.stringify(structure, null, 2));
  
  await browser.close();
})();
