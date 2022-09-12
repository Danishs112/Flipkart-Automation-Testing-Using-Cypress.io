import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import cred from "../../fixtures/example.json";
import LoginPage from "../../pages/login.page";

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