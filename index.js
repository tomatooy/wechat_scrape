const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});

const scrape = require("wechat_scrape")

app.get("/", async (req, res) => {
    const scrapedData = await scrape.get("https://mp.weixin.qq.com/s/Kr3PDqcLsRklFakUhaswGA");
    res.send(scrapedData);
});