import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import AddToCart from "../../../pages/addToCart.page";

When("I click on the {string} item on the search page", function (string) {
    AddToCart.getCard().eq(string).invoke("attr", "href").as("pageLink");
    AddToCart.getCard().eq(string).invoke('removeAttr', 'target').click();
});

And("I should see the {string} button on the item page", function (string) {
    AddToCart.getAddToCartButton().contains(string).should("be.visible");
});

When("I click on the {string} button on the item page", function (string) {
    AddToCart.getAddToCartButton().click({ force: true });
    cy.wait(3000);
});

When("I fill the {string} pincode on the pincode input field", function (string) {
    AddToCart.getPincodeInputField().type(string);
});

And("I click on the {string} button oon the item page", function (string) {
    cy.get('div span:contains("Check")').click();
});