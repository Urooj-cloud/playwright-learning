const {test,expect}=require('@playwright/test');

test('Scrape first 5 products from eBay',async({page})=>{
//1.GO TO EBAY:
await page.goto('https://www.ebay.com');
await page.pause();

//2.SEARCH FOR SOMETHING:
await page.getByPlaceholder('Search for anything').fill('laptop');
await page.keyboard.press('Enter'); 


//3.WAIT FOR THE PRODUCTS TO APPEAR: 
await page.waitForLoadState();
const productTitles=page.locator('.s-item--title');
await productTitles.first().waitFor({state:'visible',timeout:30000});
const count=await productTitles.count();
//4.THE LOOP:
for(let i=0; i<Math.min(count,5); i++){
const title=await productTitles.nth(i).innerText();

console.log(`product ${i+1}:${title}`);
}

});