## A Wechat official post scraper built based on JS and pupetteer
A nodejs module scrapes wechat officals posts and directly display as html webpage by url

## Demo:
![demo](/1.png)

## Installation:
```
npm i wechat_scrape
```
## Usage:
```
const scrape = require("wechat_scrape")

app.get("/", async (req, res) => {
    const scrapedData = await scrape.get("https://mp.weixin.qq.com/s/...."); //replace with a real wechat post url
    res.send(scrapedData);
});
```
