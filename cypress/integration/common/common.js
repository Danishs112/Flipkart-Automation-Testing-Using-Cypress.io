import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import cred from "../../fixtures/example.json"

Given("I am on the home page",function(){
    cy.visit(cred.url);
});