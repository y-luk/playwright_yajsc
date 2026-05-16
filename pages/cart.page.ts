import { Locator, Page } from '@playwright/test';

export class CartPage {
    page: Page;
    cartTable: Locator;
    productTitle: Locator;
    checkoutButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.cartTable = this.page.locator('tbody tr');
        this.productTitle = this.page.getByTestId('product-title');
        this.checkoutButton = this.page.getByTestId('proceed-1');

    }
}