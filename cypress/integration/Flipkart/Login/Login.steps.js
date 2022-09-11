import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../pages/login.page";


Then("I should see the header on the page",function(){
    LoginPage.getHeader().should("be.visible");
});

When("I should see the {string} button on the header",function(string){
   LoginPage.getLoginButtonOnHeader().contains(string).should("be.visible");
});

When("I click on the {string} button on the header",function(string){
    LoginPage.getLoginButtonOnHeader().contains(string).click();
});

Then("I should see the {string} modal on the page",function(string){
    LoginPage.getLoginModal().contains(string).should("be.visible");
});

When("I should see the close button on the login modal",function(){
    LoginPage.getCloseButton().should("be.visible");
});

When("I click on the close button on the login modal",function(){
    LoginPage.getCloseButton().click();
});

Then("I should not see the {string} modal on the page",function(string){
    LoginPage.getLoginModal().contains(string).should("not.be.visible");
});
