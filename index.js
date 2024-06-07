console.log('puppeteer');
const puppeteer = require('puppeteer');

(async () => {
  // 啟動瀏覽器
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  }); // headless 設為 false 以便看到操作過程
  const page = await browser.newPage();

  // 打開特定的網頁
  await page.goto('https://tixcraft.com/activity/detail/24_porter'); // 替換為目標網頁的 URL

  // 選擇立即購票
  const buyButton = await page.$('.buy');
  if (buyButton) {
    buyButton.click();
  }

  // 選擇日期
  const pickDateButton = await page.$('#dateSearchGameList');
  if (pickDateButton) {
    pickDateButton.click();
  }

  const pickOne = await page.$('#gameList');
  // await page.click('.activity/game/24_porter');

  // // 輸入訊息
  // await page.type('#txt_search', '這是電腦幫我輸入的～～'); // 替換為目標輸入框的選擇器和訊息

  // // 提交表單或執行其他操作
  // await page.click('#submit-button-selector'); // 替換為提交按鈕的選擇器

  // // 可選：等待結果顯示或其他處理
  // await page.waitForSelector('#result-selector'); // 替換為結果元素的選擇器

  // // 關閉瀏覽器
  // await browser.close();
})();
