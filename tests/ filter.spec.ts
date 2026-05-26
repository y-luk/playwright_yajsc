import { expect } from '@playwright/test';
import { test } from '../app.fixtures';
test.skip(!!process.env.CI)

test('Verify user can filter products by category', async ({ app, page }) => {

    await page.goto('/');

    await app.homePage.sanderFilter.check();

    await expect(app.homePage.productNames.first()).toContainText('Sander')

    const productNames = await app.homePage.productNames.allTextContents();
    
    expect(productNames.every(name => name.includes('Sander'))).toBe(true);


})
    