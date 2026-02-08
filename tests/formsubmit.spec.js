const {test, expect}=require('@playwright/test');

test('Automate a full form submission',async({page})=>{
//1.Go to the practice site:
await page.goto('https://demoqa.com/automation-practice-form');

//2.Fill in the credentials:
await page.getByPlaceholder('First Name').fill('Urooj');
await page.getByPlaceholder('Last Name').fill('QA');
await page.getByPlaceholder('name@example.com').fill('Uroojhaq9090@gmail.com');

//3.Select gender:
await page.getByText('Female',{exact:true}).click();

//4.Fill in the mobile number:
await page.getByPlaceholder('Mobile Number').fill('03072952907');

//5.Select hobbies:
await page.getByText('Reading').click();

//6.Submit form:
await page.getByRole('button',{name:'Submit'}).click();

//7.Assertion:
await expect(page.getByText('Thanks for submitting the form')).toBeVisible();

//8.Conformation:
console.log('Form submitted');



});