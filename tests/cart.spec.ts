import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';
import { HeaderFragment } from '../pages/header.fragment';
import { CartPage } from '../pages/cart.page';
test.skip(!!process.env.CI)


test('Verify user can add product to cart', {
    tag: ['@regression', '@smoke'],
  }, async ({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const headerFragment = new HeaderFragment(page);
    const cartPage = new CartPage(page);


  await test.step('Add product to cart', async () => {
    await page.goto('/');
    await homePage.clickOnProduct('Slip Joint Pliers');
  });

  await test.step('Verify product details and add to cart', async () => {
    await expect(page).toHaveURL(/\/product/);
    await expect(productPage.productName).toHaveText('Slip Joint Pliers');
    await expect(productPage.productPrice).toContainText('9.17');

    await productPage.addToCart.click();

    await expect(productPage.alert).toBeVisible();
    await expect(productPage.alert).toContainText('Product added to shopping cart.');
    await expect(productPage.alert).toBeHidden({ timeout: 10000 });
  });

  await test.step('Verify cart', async () => {
    await expect(headerFragment.cartQuantity).toHaveText('1');

    await headerFragment.navCart.click();

    await expect(page).toHaveURL(/checkout/);
    await expect(cartPage.cartTable).toHaveCount(1);
    await expect(cartPage.productTitle).toHaveText('Slip Joint Pliers');
    await expect(cartPage.checkoutButton).toBeVisible();
  });




})
