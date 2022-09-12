import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../pages/login.page";
import Utility from "../../../pages/utils";

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

When("I should see the {string} button on the header", function (string) {
    try {
        LoginPage.getLoginButtonOnHeader().contains(string).should("be.visible");
        cy.log(`${string} button is visible`);
    }
    catch (error) {
        cy.log(`${string} button is not visible` + error);
        throw (error);
    }

});

When("I click on the {string} button on the header", function (string) {
    try {
        LoginPage.getLoginButtonOnHeader().contains(string).click();
        cy.log(`${string} button is clicked`);
    }
    catch (error) {
        cy.log(`${string} button is not clicked` + error);
        throw (error);
    }

});

Then("I should see the {string} modal on the page", function (string) {
    try {
        LoginPage.getLoginModal().contains(string).should("be.visible");
        cy.log(`${string} modal is visible`);
    }
    catch (error) {
        cy.log(`${string} modal is not visible` + error);
        throw (error);
    }

});

When("I should see the close button on the login modal", function () {
    try {
        LoginPage.getCloseButton().should("be.visible");
        cy.log("close button is visible");
    }
    catch(error){
        cy.log("close button is not visible" + error);
        throw (error);
    }
   
});

When("I click on the close button on the login modal", function () {
    try{
        LoginPage.getCloseButton().click();
        cy.log("close button is clicked");
    }
    catch(error){
        cy.log("close button is not clickable" + error);
        throw (error);
    }
   
});

Then("I should not see the {string} modal on the page", function (string) {
    try{
        LoginPage.checkLoginModalVisibility().invoke("attr", "class").should("eq", "_2Sn47c");
        cy.log(`${string} modal is visible`);
    }
    catch(error){
        cy.log(`${string} modal is not visible on the page`+ error);
        throw(error);
    }
});

When("I fill the {string} on the email input field", function (string) {
    const email = Utility.getDecodedString(string);
    if(email.length === 0){
        cy.log(`${email} is not coming from the fixture file`);
    }
    else{
        try {
            LoginPage.getEmailInputField().type(email);
            cy.log(`able to fill the ${string} on the email input field`);
        }
        catch(error){
            cy.log(`not able to fill the ${string} on the email input field`+error);
            throw(error);
        }
      
    }
    
});

And("I fill the {string} on the password input field", function (string) {
    const password = Utility.getDecodedString(string);
    if(password.length === 0){
        cy.log(`${email} is not coming from the fixture file`);
    }
    else{
        try {
            LoginPage.getPasswordInputField().type(password);
            cy.log(`able to fill the ${string} on the password input field`);
        }
        catch(error){
            cy.log(`not able to fill the ${string} on the password input field`+error);
            throw(error);
        }
    
}});

And("I click on the {string} button on the login modal on the page", function (string) {
    try{
        LoginPage.getLoginButtonOnLoginModal().contains(string).click();
        cy.log(`click ${string} button on the login modal`)
    }
    catch(error){
        cy.log(`not able to click on ${string} button of the login modal`+ error);
        throw(error);
    }
   
});

Then("I should see the {string} heading on the header", function (string) {
    try {
        LoginPage.getHeadingOnHeader().contains(string).should("be.visible");
        cy.log(`${string} heading is visible on the header`);
    }
    catch(error){
        cy.log(`${string} heading is not visible on the header`+ error);
        throw(error);
    }
  
});

Then("I should see the {string} on the login modal", function (string) {
    try{
        LoginPage.getErrorMessage().contains(string).should("be.visible");
        cy.log(`${string} message is visible on the login modal`);
    }
    catch(error){
        cy.log(`${string} message is not visible on the login modal`+ error);
        throw(error);
    }
});