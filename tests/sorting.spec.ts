import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
test.skip(!!process.env.CI);

[
  { option: 'Name (A - Z)', order: 'asc' },
  { option: 'Name (Z - A)', order: 'desc' },
].forEach(({ option, order }) => {
  test(`Verify sorting by name ${order}`, async ({ page }) => {

    const homePage = new HomePage(page);

    await page.goto('/');

    await homePage.sortDropdown.selectOption(option);

    const productNames = await homePage.productNames.allTextContents();

    let sorted = [...productNames].sort();
    if (order === 'desc') {
      sorted = sorted.reverse();
    }

    expect(productNames).toEqual(sorted);

      });
    });


  [
  { option: 'Price (High - Low)', order: 'desc' },
  { option: 'Price (Low - High)', order: 'asc' },
].forEach(({ option, order }) => {
  test(`Verify user can perform sorting by price ${order}`, async ({ page }) => {

const homePage = new HomePage(page);   

await page.goto('/');

await homePage.sortDropdown.selectOption(option);

const priceTexts = await homePage.productPrices.allTextContents();
const prices = priceTexts.map(p => parseFloat(p.replace('$', '')));
let sorted = [...prices].sort((a, b) => a - b);
if (order === 'desc') {
  sorted = sorted.reverse();
}
expect(prices).toEqual(sorted);

  });
});