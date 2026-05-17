import { Locator, Page } from '@playwright/test';


export class HeaderFragment {
    page: Page;
    navMenu: Locator;
    navCart: Locator;
    cartQuantity: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.navMenu = this.page.getByTestId('nav-menu');   
        this.navCart = this.page.getByTestId('nav-cart');
        this.cartQuantity = this.page. getByTestId('cart-quantity');
}
}