   const puppeteer = require('puppeteer');

   var commentContent = '//*[@id="comment"]'
   var commentEmail = '//*[@id="email"]'
   var commentName = '//*[@id="author"]'
   var commentWebsite = '//*[@id="url"]'


    async function main() {
        const browser = await puppeteer.launch({
            headless: false
        });
        let r = (Math.random() + 1).toString(36).substring(7);
        let name = r
        const page = await browser.newPage();
        await page.goto('https://exodusamericanus.wordpress.com/2023/08/16/achtung-amerikaner-kahll-in-show-august-15th-2023/');
        await page.waitForTimeout(2000); // wait for 2 seconds
        // content
        const commentElement = await page.$x(commentContent);
        await commentElement[0].click({clickCount: 3});
        await commentElement[0].type('FUCK OFF NAZI SCUM. KILL YOURSELF.');
        // email
        const emailElement = await page.$x(commentEmail);
        await emailElement[0].click({clickCount: 3});
        await emailElement[0].type(name+'@'+name+'.com');
        // name
        const nameElement = await page.$x(commentName);
        await nameElement[0].click({clickCount: 3});
        await nameElement[0].type(name);
        // website
        const websiteElement = await page.$x(commentWebsite);
        await websiteElement[0].click({clickCount: 3});
        await websiteElement[0].type(name+'.com');

        const submitElement = await page.$x('//*[@id="comment-submit"]');
        await submitElement[0].click({clickCount: 3});

        console.log("comment posted with name:", r)
        await browser.close();
    }

    main();
setInterval(function(){
    main()
}, 5000)

