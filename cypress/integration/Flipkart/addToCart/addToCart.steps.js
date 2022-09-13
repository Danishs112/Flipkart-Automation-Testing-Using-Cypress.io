import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import AddToCart from "../../../pages/addToCart.page";

And("I should see all the items on the search page",function(){
    AddToCart.getAllCards().should("be.visible");
});

When("I click on the {string} item on the search page",function(string){
    AddToCart.getCard().eq(string).invoke("attr","href").as("pageLink");
    AddToCart.getCard().eq(string).invoke('removeAttr', 'target').click();
});

// And("I should see the {string} button on the item page",function(string){
//     AddToCart.getAddToCartButton().contains(string).should("be.visible");
// });

When("I click on the {string} button on the item page",function(string){
    cy.wait(1000);
    cy.get('ul.row li:first button').should('be.visible')
    .trigger('mouseover')
    .click({ force: true });
    AddToCart.getAddToCartButton();
    cy.wait(3000);
});