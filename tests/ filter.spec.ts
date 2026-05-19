import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
test.skip(!!process.env.CI)

test('Verify user can filter products by category', async ({ page }) => {

    const homePage = new HomePage(page);

    await page.goto('/');

    await homePage.sanderFilter.check();

    await expect(homePage.productNames.first()).toContainText('Sander')

    const productNames = await homePage.productNames.allTextContents();
    
    expect(productNames.every(name => name.includes('Sander'))).toBe(true);


})
    
