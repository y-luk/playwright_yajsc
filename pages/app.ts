import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { HomePage } from './home.page';
import { LoginPage } from './login.page';
import { AccountPage } from './account.page';
import { CartPage } from './cart.page';
import { HeaderFragment } from './header.fragment';
import { ProductPage } from './product.page';
import { CheckoutPage } from './checkout.page';

export class App {
    basePage: BasePage;
    homePage: HomePage;
    loginPage: LoginPage;
    accountPage: AccountPage;
    cartPage: CartPage;
    headerFragment: HeaderFragment;
    productPage: ProductPage;
    checkoutPage: CheckoutPage

    constructor(page: Page){
        this.basePage = new BasePage(page);
        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
        this.accountPage = new AccountPage(page);
        this.cartPage = new CartPage(page);
        this.headerFragment = new HeaderFragment(page);
        this.productPage = new ProductPage(page);
        this.checkoutPage = new CheckoutPage(page);

    }
}
