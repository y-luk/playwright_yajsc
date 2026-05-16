import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';
import { HeaderFragment } from '../pages/header.fragment';
import { CartPage } from '../pages/cart.page';
test.skip(!!process.env.CI)


test('Verify user can add product to cart', async ({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const headerFragment = new HeaderFragment(page);
    const cartPage = new CartPage(page);

    await page.goto('/');
    
    await homePage.clickOnProduct('Slip Joint Pliers');

    await expect(page).toHaveURL(/\/product/);
    await expect(productPage.productName).toHaveText('Slip Joint Pliers');
    await expect(productPage.productPrice).toContainText('9.17');

    await productPage.addToCart.click();

    await expect(page.getByRole('alert')).toBeVisible();
    await expect(page.getByRole('alert')).toContainText('Product added to shopping cart.');
    await expect(page.getByRole('alert'), { timeout: 10000 }).toBeHidden();


    await expect(page.getByTestId('cart-quantity')).toHaveText('1');

    await headerFragment.navCart.click();

    await expect(page).toHaveURL(/checkout/);
    await expect(cartPage.cartTable).toHaveCount(1);
    await expect(cartPage.productTitle).toHaveText('Slip Joint Pliers');
    await expect(cartPage.checkoutButton).toBeVisible();




})
