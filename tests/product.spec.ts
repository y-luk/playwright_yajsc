import { expect } from '@playwright/test';
import { test } from '../app.fixtures';
test.skip(!!process.env.CI)

test('Verify user can view product details', async ({ app, page }) => {

    await page.goto('/');

    await app.homePage.clickOnProduct('Combination Pliers');

    await expect(page).toHaveURL(/\/product/);
    await expect(app.productPage.productName).toHaveText('Combination Pliers');
    await expect(app.productPage.productPrice).toContainText('14.15');
    await expect(app.productPage.addToCart).toBeVisible();
    await expect(app.productPage.addToFavorites).toBeVisible();
});