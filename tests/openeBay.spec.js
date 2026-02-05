const {test, expect} = require ( '@playwright/test' )

test('open eBay Test', async ({page}) => {

  await page.goto('https://www.ebay.com/');
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('iphone');
  await page.locator('span').filter({ hasText: 'iphone 15' }).nth(2).click();
  await page.getByText('$408.87').click();
  await expect(page).toHaveURL(/iphone/);

});
     