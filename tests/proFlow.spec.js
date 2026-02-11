const {test,expect}=require('@playwright/test');
test('Complete purchase flow',async({page})=>{
//1.Login:
await page.goto('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('password').fill('secret_sauce');
await page.getByRole('button',{name:'Login'}).click();

//2.Add item to cart:
await page.locator('.inventory_item').filter({hasText:'Sauce Labs Backpack'}).click();
await page.getByRole('button',{name:'Add to cart'}).first().click();

//3.Go to cart:
await page.locator('.shopping_cart_link').click();

//4.Checkout progress:
await page.getByRole('button',{name:'Checkout'}).click();

//5.Fill out the information:
await page.getByPlaceholder('First Name').fill('Urooj');
await page.getByPlaceholder('Last Name').fill('QA');
await page.getByPlaceholder('Zip/Postal Code').fill('71000');

await page.getByRole('button',{name:'Continue'}).click()

//6.Finish the order:
await page.getByRole('button',{name:'Finish'}).click();

//7.Verify Success Message:
await expect(page.getByText('Thank You for your order!')).toBeVisible();

console.log('Order completed');

;








});