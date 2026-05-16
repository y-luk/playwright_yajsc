import { test, expect } from '@playwright/test';
import { regularUser } from '../test-data/user';
import { LoginPage } from '../pages/login.page';
import { AccountPage } from '../pages/account.page';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test('Verify login with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  await page.goto('/auth/login');

  await loginPage.performLogin(regularUser.email, regularUser.password);


  await expect(page).toHaveURL('/account');
  await expect(accountPage.pageTitle).toHaveText('My account');
  await expect(accountPage.header.navMenu).toHaveText(regularUser.userName);

  await page.context().storageState({ path: authFile });
});