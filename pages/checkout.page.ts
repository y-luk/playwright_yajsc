import { Locator, Page } from '@playwright/test';
import { BillingAddress, CardDetails } from '../test-data/checkout';

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
            await this.postalCode.fill(BillingAddress.postalCode);
            await this.houseNumber.fill(BillingAddress.houseNumber);
            await this.country.selectOption(BillingAddress.country);
            await this.state.fill(BillingAddress.state);

        }


    async fillCardDetails() {
        await this.paymentMethod.selectOption(CardDetails.paymentMethod);
        await this.creditCardNumber.fill(CardDetails.creditCardNumber);
        await this.expirationDate.fill(CardDetails.expirationDate());
        await this.cvv.fill(CardDetails.cvv);
        await this.cardHolderName.fill(CardDetails.cardHolderName);
        
}
}