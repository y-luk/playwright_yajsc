import { Locator, Page } from '@playwright/test';

export class BasePage {
    protected page: Page;
    alert: Locator;
    constructor(page: Page) {
        this.page = page;
        this.alert = page.getByRole('alert');
    }
}