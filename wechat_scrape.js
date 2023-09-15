const puppeteer = require('puppeteer')
class wechat_scraper {
    constructor() {
    }



    async get(url) {
        try {
            const browser = await puppeteer.launch({
                headless: true, // Set to false if you want to see the browser window
            });
            const page = await browser.newPage();
            await page.goto(url, { waitUntil: 'domcontentloaded' }); // Adjust as needed

            // Add a <meta> tag to the <head> of the HTML content
            await page.evaluate(() => {
                const metaTag = document.createElement('meta');
                metaTag.setAttribute('name', 'referrer');
                metaTag.setAttribute('content', 'never');
                const head = document.querySelector('head');
                if (head) {
                    head.appendChild(metaTag);
                }
            });

            // Replace img elements with new img elements with src attributes set to data-src
            await page.evaluate(() => {
                const qrCodeDiv = document.querySelector('.qr_code_pc');
                if (qrCodeDiv) {
                    qrCodeDiv.remove();
                }
                const imgElements = document.querySelectorAll('img');
                imgElements.forEach((img) => {
                    const dataSrc = img.getAttribute('data-src');
                    if (dataSrc) {
                        const newImg = document.createElement('img');
                        newImg.setAttribute('src', dataSrc);
                        newImg.setAttribute('class', img.getAttribute('class'));
                        newImg.setAttribute('style', img.getAttribute('style'));
                        img.parentNode.replaceChild(newImg, img);
                    }
                });
            });

            // Get the updated HTML content of the page
            const htmlContent = await page.content();

            await browser.close();

            return htmlContent;
        } catch (error) {
            console.error('Error scraping webpage:', error);
            return null;
        }
    }



}

const scrapper = new wechat_scraper()
module.exports = scrapper