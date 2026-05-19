import { Locator, Page } from '@playwright/test';


export class HomePage {
    page: Page;
    productNames: Locator;
    sortDropdown: Locator;
    productPrices: Locator;
    sanderFilter: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.productNames = this.page.getByTestId('product-name');
        this.sortDropdown = this.page.getByTestId('sort');
        this.productPrices = this.page.getByTestId('product-price')
        this.sanderFilter = this.page.getByLabel('Sander');

}

    async clickOnProduct(productName: string): Promise<void> {
        await this.page.getByTestId('product-name').getByText(productName).click();
    }

}