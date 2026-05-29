import { test as base } from '@playwright/test';
import { regularUser } from './test-data/user';
import { App } from './pages/app';

type MyFixtures = {
    app: App;
    loggedInApp: App;
};

export const test = base.extend<MyFixtures>({
    app: async ({ page }, use) => {
        const app = new App(page);
        await use(app);
    },
    loggedInApp: async ({ app, request, page }, use) => {
        const response = await request.post('https://api.practicesoftwaretesting.com/users/login', {
        data: {
            email: regularUser.email,
            password: regularUser.password
        }
    });
        const responseData = await response.json() as { access_token: string };
        const token = responseData.access_token;

    await page.goto('/')   
    await page.evaluate ((token) => {
        localStorage.setItem('auth-token', token);
    },token);

    await page.reload()

await use(app);

    },
}); 

export { expect } from '@playwright/test';
