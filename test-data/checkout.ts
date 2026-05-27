import { getExpirationDate } from "../utils/helpers"

export const billingAddress = {
            postalCode: '79066',
            houseNumber: '1',
            country: 'UA',
            state: 'Lviv',
        }

export const cardDetails = {
        paymentMethod: 'credit-card',
        creditCardNumber: '1111-1111-1111-1111',
        expirationDate: getExpirationDate(),
        cvv: '111',
        cardHolderName: 'Test User',
    
}