import { test, expect } from '@playwright/test';
import { regularUser } from '../test-data/user';
import { AccountPage } from '../pages/account.page';
import path from 'path';
test.skip(!!process.env.CI)

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test.use({storageState: authFile});

test('Verify login with valid credentials', async ({ page }) => {

  const accountPage = new AccountPage(page);

  await page.goto('/account');


  await expect(page).toHaveURL('/account');
  await expect(accountPage.pageTitle).toHaveText('My account');
  await expect(accountPage.header.navMenu).toHaveText(regularUser.userName);
});