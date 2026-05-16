import { test, expect } from '@playwright/test';
test.skip(!!process.env.CI)

test('Verify user can filter products by category', async ({ page }) => {


    await page.goto('/');

    await page.getByLabel('Sander').check();

    await expect(page.getByTestId('product-name').first()).toContainText('Sander')

    const productNames = await page.getByTestId('product-name').allTextContents();
    
    expect(productNames.every(name => name.includes('Sander'))).toBe(true);


})
    
