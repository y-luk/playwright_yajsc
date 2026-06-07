import { test, expect } from '../app.fixtures';
test.skip(!!process.env.CI)

test("Mocks response and returns 20 products", {
    tag:'@regression',
  },async ({ page, app }) => {

  await test.step('Mock products API', async () => {
    await page.route('**/products**', async route => {
    const json = { data: Array.from({ length: 20 }, (_, i) => ({ id: `id-${i}`, name: `Product ${i + 1}` })) };
    await route.fulfill({ json });
    });

  });

  await test.step('Navigate to home page', async () => {
    await page.goto('/');
  });

  await test.step('Verify 20 products displayed', async () => {
    await expect(app.homePage.productNames).toHaveCount(20);
    });

});