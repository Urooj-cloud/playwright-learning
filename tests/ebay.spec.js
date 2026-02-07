const {test,expect}=require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://www.ebay.com/');
  await page.getByPlaceholder('Search for anything',{exact:false}).fill('Apple iphone 13 128GB-6.1');
  await page.keyboard.press('Enter');
  const pagePromise=page.waitForEvent('popup');
  await page.getByAltText('Apple iphone 13 128GB Unlocked').first().click();
  const newTab=await pagePromise;
  await page.waitForLoadState();
  await newTab.getByRole('button',{name:'Add to cart'}).click();
  await expect(newTab.getByText('Added to cart')).toBeVisible();
  console.log('iphone added to cart successfuly!');
});
