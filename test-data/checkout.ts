import { getExpirationDate } from "../utils/helpers"

export const BillingAddress = {
            postalCode: '79066',
            houseNumber: '1',
            country: 'UA',
            state: 'Lviv',
        }

export const CardDetails = {
        paymentMethod: 'credit-card',
        creditCardNumber: '1111-1111-1111-1111',
        expirationDate: getExpirationDate(),
        cvv: '111',
        cardHolderName: 'Test User',
    
}