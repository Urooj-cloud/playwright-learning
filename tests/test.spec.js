const {test,expect}=require('@playwright/test');
test('scrape products',async({page})=>{

  //1.GO to page:
  await page.goto('https://books.toscrape.com/.');

  //2.Point out to products:
  await page.waitForSelector('.product_pod');
  const products=await page.locator('.product_pod').all();

  //3.Start loop:
  for(const product of products){
    const title=await product.locator('h3 a').getAttribute('title');
    const price=await product.locator('.price_color').innerText();
    console.log(`Product:${title},Price:${price}`);
    
    
  }
  //4.The proof:
    console.log('---Test passed:Navigation successful---');


});
