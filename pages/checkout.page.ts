import { Locator, Page } from '@playwright/test';

function getExpirationDate(): string {
    const date = new Date();
    date.setMonth(date.getMonth() + 3);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const expirationDate = `${month}/${year}`;

    return expirationDate
}

export class CheckoutPage {
    page: Page;
    country: Locator;
    postalCode: Locator;
    houseNumber: Locator;
    state: Locator;
    paymentMethod: Locator;
    creditCardNumber: Locator;
    expirationDate: Locator;
    cvv: Locator;
    cardHolderName: Locator;
    confirmButton: Locator;
    proceedToCheckout: Locator;
    proceedToPayment: Locator
    successMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.country = this.page.getByTestId('country');
        this.postalCode = this.page.getByTestId('postal_code');
        this.houseNumber = this.page.getByTestId('house_number');
        this.state = this.page.getByTestId('state');

        this.paymentMethod = this.page.getByTestId('payment-method');
        this.creditCardNumber = this.page.getByTestId('credit_card_number');
        this.expirationDate = this.page.getByTestId('expiration_date');
        this.cvv = this.page.getByTestId('cvv');
        this.cardHolderName = this.page.getByTestId('card_holder_name');
        this.confirmButton = this.page.getByTestId('finish');
        this.proceedToCheckout = this.page.getByTestId('proceed-2');
        this.proceedToPayment = this.page.getByTestId('proceed-3');
        this.successMessage = this.page.getByTestId('payment-success-message');


    }

     async fillBillingAddress() {
            await this.postalCode.fill('79066');
            await this.houseNumber.fill('1');
            await this.country.selectOption('UA');
            await this.state.fill('Lviv');

        }


    async fillCardDetails() {
        await this.paymentMethod.selectOption('credit-card');
        await this.creditCardNumber.fill('1111-1111-1111-1111');
        await this.expirationDate.fill(getExpirationDate());
        await this.cvv.fill('111');
        await this.cardHolderName.fill('Test User');
        
}
}