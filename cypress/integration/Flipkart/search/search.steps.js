import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import SearchPage from "../../../pages/search.page";


And("I should see the search input field on the header",function(){
    SearchPage.getSearchInputField().should("be.visible");
});


When("I fill the {string} on the search input field",function(string){
    SearchPage.getSearchInputField().type(string);
});

And("I click on the search icon on the search input field",function(){
    SearchPage.getSearchIconOnInputField().click();
});

Then("I should navigated to the {string} page",function(string){
    cy.url().should('include', string); 
});