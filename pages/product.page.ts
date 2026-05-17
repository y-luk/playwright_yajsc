import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductPage extends BasePage {
    productName: Locator;
    productPrice: Locator;
    addToCart: Locator;
    addToFavorites: Locator;

    constructor(page: Page){
        super(page);
        this.productName = this.page.getByTestId('product-name');
        this.productPrice = this.page.getByTestId('unit-price');
        this.addToCart = this.page.getByTestId('add-to-cart');
        this.addToFavorites = this.page.getByTestId('add-to-favorites');
    }
}