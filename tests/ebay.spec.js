const {test,expect}=require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://www.ebay.com/');
  await page.getByRole('combobox', { name: 'Search for anything' }).click();
  await page.getByRole('combobox', { name: 'Search for anything' }).fill('iphone 13');
  await page.locator('#ebay-ac-suggestion-4').getByText('13').click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#item5531195327').getByRole('link', { name: 'Apple iPhone 13 A2482 128 GB Midnight TracFone Very Good', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByTestId('x-atc-action').getByTestId('ux-call-to-action').click();
  await page1.getByRole('button', { name: 'Close dialog' }).click();
});
