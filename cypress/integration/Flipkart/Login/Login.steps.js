import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../pages/login.page";
import Utility from "../../../pages/utils";

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
    LoginPage.checkLoginModalVisibility().invoke("attr", "class").should("eq","_2Sn47c");
});

When("I fill the {string} on the email input field",function(string){
    const email = Utility.getDecodedString(string);
    LoginPage.getEmailInputField().type(email);
});

And("I fill the {string} on the password input field",function(string){
    const password = Utility.getDecodedString(string);
    LoginPage.getPasswordInputField().type(password);
});

And("I click on the {string} button on the login modal on the page",function(string){
    LoginPage.getLoginButtonOnLoginModal().contains(string).click();
});

Then("I should see the {string} heading on the header",function(string){
    LoginPage.getHeadingOnHeader().contains(string).should("be.visible");
});

Then("I should see the {string} on the login modal",function(string){
    LoginPage.getErrorMessage().contains(string).should("be.visible");
});