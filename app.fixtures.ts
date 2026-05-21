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
    loggedInApp: async ({ app }, use) => {
        await app.loginPage.page.goto('/auth/login');
        await app.loginPage.performLogin(regularUser.email, regularUser.password);

        await use(app);
    },
});

export { expect } from '@playwright/test';