import { test, expect } from '../app.fixtures';
import { CardDetails, BillingAddress } from '../test-data/checkout';
test.skip(!!process.env.CI);

test ('Verify successful payment using loggedInApp fixture', async ({ loggedInApp, page }) => {

    await page.goto('/');

    const firstProductName = await loggedInApp.homePage.productNames.first().textContent();
    const firstProductPrice = await loggedInApp.homePage.productPrices.first().textContent();

    await loggedInApp.homePage.productNames.first().click();
    await loggedInApp.productPage.addToCart.click();
    await loggedInApp.headerFragment.navCart.click();

    await expect(loggedInApp.cartPage.productTitle).toHaveText(firstProductName!);
    await expect(loggedInApp.cartPage.productPrice).toHaveText(firstProductPrice!);

    await loggedInApp.cartPage.checkoutButton.click();

    await expect(page.getByText('you are already logged in')).toBeVisible();

    await loggedInApp.checkoutPage.proceedToCheckout.click();

    await loggedInApp.checkoutPage.fillBillingAddress(BillingAddress);

    await loggedInApp.checkoutPage.proceedToPayment.click();

    await loggedInApp.checkoutPage.fillCardDetails(CardDetails);
    await loggedInApp.checkoutPage.confirmButton.click();

    await expect(loggedInApp.checkoutPage.successMessage).toBeVisible();

})