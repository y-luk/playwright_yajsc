import { Locator, Page } from '@playwright/test';
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

     async fillBillingAddress(billingAddressData: {postalCode: string, houseNumber: string, country: string, state: string}) {
            await this.postalCode.fill(billingAddressData.postalCode);
            await this.houseNumber.fill(billingAddressData.houseNumber);
            await this.country.selectOption(billingAddressData.country);
            await this.state.fill(billingAddressData.state);

        }


    async fillCardDetails (cardDetailsData: {paymentMethod: string, creditCardNumber: string, expirationDate: string, cvv: string, cardHolderName: string}) {
        await this.paymentMethod.selectOption(cardDetailsData.paymentMethod);
        await this.creditCardNumber.fill(cardDetailsData.creditCardNumber);
        await this.expirationDate.fill(cardDetailsData.expirationDate);
        await this.cvv.fill(cardDetailsData.cvv);
        await this.cardHolderName.fill(cardDetailsData.cardHolderName);
        
}
}