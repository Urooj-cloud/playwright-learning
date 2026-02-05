const {test, expect}=require('@playwright/test');

test('Verify Successful Login', async({page})=>{
//Navigate to a stable practice site
await page.goto('https://the-internet.herokuapp.com/login');
await page.pause();
await page.getByRole('textbox',{name:'username'}).fill('tomsmith');
await page.getByRole('textbox',{name:'password'}).fill('SuperSecretPassword!');
await page.getByRole('button',{name:'Login'}).click();
await expect(page.getByText('You logged into a secure area!')).toBeVisible();


});