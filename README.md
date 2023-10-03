## A Wechat official post scraper built based on JS and pupetteer
A nodejs package for scrapeing wechat officals posts and directly display as html webpage by url.

## Copyright Warning
**Unauthorized use of this tool to scrape content is prohibited. Please ask for permission from content creators before use it for commercial purpose.**
## Demo:
![demo](/1.png)

## Installation:
This package is now on npm, run following command to install.
```
npm i wechat_scrape
```
## Sample Usage:
```
const scrape = require("wechat_scrape")

app.get("/", async (req, res) => {
    const scrapedData = await scrape.get("https://mp.weixin.qq.com/s/...."); //replace with a real wechat post url
    res.send(scrapedData);
});
```
