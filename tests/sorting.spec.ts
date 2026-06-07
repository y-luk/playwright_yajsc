import { expect } from '@playwright/test';
import { test } from '../app.fixtures';
test.skip(!!process.env.CI);

[
  { option: 'Name (A - Z)', order: 'asc' },
  { option: 'Name (Z - A)', order: 'desc' },
].forEach(({ option, order }) => {
  test(`Verify sorting by name ${order}`, {
    tag:'@regression',
  },async ({ app, page }) => {

  await test.step('Navigate to home page', async () => {
    await page.goto('/');
  });

  await test.step('Apply sorting', async () => {
    await app.homePage.sortDropdown.selectOption(option);
  });

  await test.step('Verify sorted products', async () => {
    const productNames = await app.homePage.productNames.allTextContents();

    let sorted = [...productNames].sort();
    if (order === 'desc') {
      sorted = sorted.reverse();
    }

    expect(productNames).toEqual(sorted);
  });

      });
    });


  [
  { option: 'Price (High - Low)', order: 'desc' },
  { option: 'Price (Low - High)', order: 'asc' },
].forEach(({ option, order }) => {
  test(`Verify user can perform sorting by price ${order}`, {
    tag:'@regression',
  }, async ({ app, page }) => {

await test.step('Navigate to home page', async () => {
  await page.goto('/');
}); 

await test.step('Apply sorting', async () => {
  await app.homePage.sortDropdown.selectOption(option);
});

await test.step('Verify sorted products', async () => {
  const priceTexts = await app.homePage.productPrices.allTextContents();
  const prices = priceTexts.map(p => parseFloat(p.replace('$', '')));
  let sorted = [...prices].sort((a, b) => a - b);
  if (order === 'desc') {
    sorted = sorted.reverse();
  }
  expect(prices).toEqual(sorted);
  });

    });
  });