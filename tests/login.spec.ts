import { test, expect } from '@playwright/test';
import { regularUser } from '../test-data/user';
import { LoginPage } from '../pages/login.page';
import { AccountPage } from '../pages/account.page';

test('Verify login with valid credentials', async ({ page }) => {
  test.skip(!!process.env.CI, 'Skip login test on CI env')

  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  await page.goto('/auth/login');

  await loginPage.performLogin(regularUser.email, regularUser.password);


  await expect(page).toHaveURL('/account');
  await expect(accountPage.pageTitle).toHaveText('My account');
  await expect(accountPage.header.navMenu).toHaveText(regularUser.userName);
});