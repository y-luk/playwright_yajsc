import { Locator, Page } from '@playwright/test';


export class ProductPage {
    page: Page;
    productName: Locator;
    productPrice: Locator;
    addToCart: Locator;
    addToFavorites: Locator;

    constructor(page: Page){
        this.page = page;
        this.productName = this.page.locator('[data-test="product-name"]');
        this.productPrice = this.page.locator('[data-test="unit-price"]');
        this.addToCart = this.page.locator('[data-test="add-to-cart"]');
        this.addToFavorites = this.page.locator('[data-test="add-to-favorites"]');
}
}