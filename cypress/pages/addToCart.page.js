const cards = "div._13oc-S div[data-tkid] a";
const addToCartButton = 'ul.row li button:contains("ADD TO CART")';
const pincodeInputField = "input#pincodeInputId";

class AddToCart{
    static getAllCards(){
        return cy.get(cards);
    }
    static getCard(){
        return cy.get(`${cards}`);
    }
    static getAddToCartButton(){
        return cy.get(addToCartButton);
    }
    static getPincodeInputField(){
        return cy.get(pincodeInputField);
    }
}
export default AddToCart;