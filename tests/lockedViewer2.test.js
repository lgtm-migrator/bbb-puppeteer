const puppeteer = require('puppeteer');
var colors = require('colors/safe');

colors.setTheme({
    info: 'green',
    error: 'red',
    warn: 'yellow'
});

let lock = {}
lock.init = puppeteer.launch({
        headless: false,
        args: [ '--use-fake-ui-for-media-stream' ],
        executablePath: '/usr/bin/google-chrome'
    }).then(async browser => {
        browser.newPage().then(async page => {
        let passed = 0;
        let failed = 0;
        await page.setViewport({ width: 1042, height: 617});
        try {
            await page.goto(`https://8d1ab45384a1.bbbvm.imdt.com.br/demo/demoHTML5.jsp?username=lockedViewer2&isModerator=false&action=create`);
            
            await page.waitFor(3000);
            await page.waitFor('[aria-describedby^="modalDismissDescription"]');
            await page.click('[aria-describedby^="modalDismissDescription"]');
            await page.waitFor(3000);
        
            try {
                // WIP                 
                // WIP                 
                // WIP                 
                // WIP                 
                // WIP                 
                // WIP                 
                 
                passed++;
                console.log(colors.info('Logging in with a Viewer'+passed+' of 2 !'));
            }
            catch (error){
                failed++;
                console.log(colors.error({error},'Error while logging in with a ViewerLocked2 !'));
            }
        }
        catch (error) {
            console.log(colors.warn({error},'There was an error at the Locks test !'));
        }

        console.log(colors.error(failed+' failed Tests of 9 !'));
        console.log(colors.info(passed+' passed Tests of 9 !'));
        browser.close();
    });
});
module.exports = lock;
