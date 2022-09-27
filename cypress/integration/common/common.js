import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import cred from "../../fixtures/example.json";
import LoginPage from "../../pages/login.page";
import SearchPage from "../../pages/search.page";
import AddToCart from "../../pages/addToCart.page";
import Utility from "../../pages/utils";

Given("I am on the home page",function(){
    cy.visit(cred.url);
});

Then("I should see the header on the page", function () {
    try {
        LoginPage.getHeader().should("be.visible");
        cy.log("header is visible");
    }
    catch (error) {
        cy.log("element is not visible: " + error);
        throw (error);
    }
});

When("I search for the {string} item",function(string){
    try{
        SearchPage.getSearchInputField().type(string); 
        cy.log(`fill the ${string} item on the search input field`);
    }
    catch(error){
        cy.log(`not able to fill the ${string} item on the search input field` + error);
        throw(error);
    }
    
    try{
        SearchPage.getSearchIconOnInputField().click();
        cy.log('clicked on the search icon on the search input field');
    }
    catch(error){
        cy.log('not able to clicked on the search icon on the search input field'+error);
        throw(error);
    }
});

Then("I should navigated to the {string} page",function(string){
    try{
        cy.url().should('include', string);
        cy.log(`navigated to the ${string} page`); 
    }
    catch(error){
        cy.log(`not navigated to the ${string} page` + error);
        throw(error);
    }
});

And("I log in with valid credentials",function(){
    LoginPage.getLoginButtonOnHeader().contains("Login").click();
    const email = Utility.getDecodedString("valid_email");
    LoginPage.getEmailInputField().type(email);
    const password = Utility.getDecodedString("valid_password");
    LoginPage.getPasswordInputField().type(password);
    LoginPage.getLoginButtonOnLoginModal().click();
});

When("I fill the {string} on the search input field",function(string){
    cy.wait(4000);
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

And("I should see all the items on the search page", function () {
    AddToCart.getAllCards().should("be.visible");
});