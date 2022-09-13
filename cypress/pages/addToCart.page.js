const cards = "div._13oc-S div[data-tkid] a";
const addToCartButton = 'ul.row li button:contains("ADD TO CART")';

class AddToCart{
    static getAllCards(){
        return cy.get(cards);
    }
    static getCard(){
        return cy.get(`${cards}`);
    }
    static getAddToCartButton(){
        cy.get(addToCartButton).trigger("click");
    }
}
export default AddToCart;