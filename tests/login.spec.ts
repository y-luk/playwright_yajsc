import { test, expect } from '@playwright/test';
import { regularUser } from '../test-data/user';

test('Verify login with valid credentials', async ({ page }) => {
  test.skip(!!process.env.CI, 'Skip login test on CI env')

  const {email, password, userName} = regularUser

  await page.goto('/auth/login');

  await page.getByTestId('email').fill(regularUser.email);
  await page.getByTestId('password').fill(regularUser.password);
  await page.getByTestId('login-submit').click();

  await expect(page).toHaveURL('/account')
  await expect(page.getByTestId('page-title')).toHaveText('My account');
  await expect(page.getByTestId('nav-menu')).toHaveText(regularUser.userName);
});