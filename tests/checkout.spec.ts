import { test, expect } from '../app.fixtures';
import { cardDetails, billingAddress} from '../test-data/checkout';
test.skip(!!process.env.CI);

test ('Verify successful payment using loggedInApp fixture', {
    tag: ['@regression', '@smoke'],
  }, async ({ loggedInApp, page }) => {

  await test.step('Add product to cart', async () => { 
    await page.goto('/');

    const firstProductName = await loggedInApp.homePage.productNames.first().textContent();
    const firstProductPrice = await loggedInApp.homePage.productPrices.first().textContent();

    await loggedInApp.homePage.productNames.first().click();
    await loggedInApp.productPage.addToCart.click();
    await loggedInApp.headerFragment.navCart.click();

    await expect(loggedInApp.cartPage.productTitle).toHaveText(firstProductName!);
    await expect(loggedInApp.cartPage.productPrice).toHaveText(firstProductPrice!);
  });

  await test.step('Proceed to checkout', async () => { 
    await loggedInApp.cartPage.checkoutButton.click();

    await expect(page.getByText('you are already logged in')).toBeVisible();

    await loggedInApp.checkoutPage.proceedToCheckout.click();
  }); 

  await test.step('Fill billing address', async () => { 
    await loggedInApp.checkoutPage.fillBillingAddress(billingAddress);
  });  

  await test.step('Fill payment details', async () => {
    await loggedInApp.checkoutPage.proceedToPayment.click();

    await loggedInApp.checkoutPage.fillCardDetails(cardDetails);
    await loggedInApp.checkoutPage.confirmButton.click();
  });  

  await test.step('Verify successful payment', async () => {
    await expect(loggedInApp.checkoutPage.successMessage).toBeVisible();
  });  

})