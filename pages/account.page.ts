import { Locator, Page } from '@playwright/test';
import { HeaderFragment } from './header.fragment';


export class AccountPage {
    page: Page;
    pageTitle: Locator;
    header: HeaderFragment;
    constructor(page: Page){
        this.page = page;
        this.pageTitle = this.page.locator('[data-test="page-title"]');
        this.header = new HeaderFragment(page);
}
}