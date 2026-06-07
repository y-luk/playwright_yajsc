import { test, expect } from '@playwright/test';
import { regularUser } from '../test-data/user';
import { AccountPage } from '../pages/account.page';
import path from 'path';
test.skip(!!process.env.CI)

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test.use({storageState: authFile});

test('Verify login with valid credentials', {
    tag: ['@regression', '@smoke'],
  }, async ({ page }) => {

  const accountPage = new AccountPage(page);

await test.step('Navigate to account page', async () => {
    await page.goto('/account');
});

await test.step('Verify user is logged in', async () => {
    await expect(page).toHaveURL('/account');
    await expect(accountPage.pageTitle).toHaveText('My account');
    await expect(accountPage.header.navMenu).toHaveText(regularUser.userName);
    
});
});