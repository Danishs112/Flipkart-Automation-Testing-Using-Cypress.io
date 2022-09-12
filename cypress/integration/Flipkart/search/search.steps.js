import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import SearchPage from "../../../pages/search.page";


And("I should see the search input field on the header",function(){
    try{
        SearchPage.getSearchInputField().should("be.visible");
        cy.log('search input field is visible on the page');
    }
    catch(error){
        cy.log('seach input field is not visible on the page'+ error);
        throw(error);
    }
});


When("I fill the {string} on the search input field",function(string){
    try{
        SearchPage.getSearchInputField().type(string); 
        cy.log(`fill the ${string} item on the search input field`);
    }
    catch(error){
        cy.log(`not able to fill the ${string} item on the search input field` + error);
        throw(error);
    }
});

And("I click on the search icon on the search input field",function(){
    try{
        SearchPage.getSearchIconOnInputField().click();
        cy.log('clicked on the search icon on the search input field');
    }
    catch(error){
        cy.log('not able to clicked on the search icon on the search input field'+error);
        throw(error);
    }
});
