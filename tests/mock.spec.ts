import { test, expect } from '../app.fixtures';

test("Mocks response and returns 20 products", async ({ page, app }) => {

    await page.route('**/products**', async route => {
    const json = { data: Array.from({ length: 20 }, (_, i) => ({ id: `id-${i}`, name: `Product ${i + 1}` })) };
    await route.fulfill({ json });
  });

  await page.goto('/');

  await expect(app.homePage.productNames).toHaveCount(20);
});