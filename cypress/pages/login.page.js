const header="div#container div._1kfTjk";
const loginButtonOnHeader = `${header} a`;
const loginModal = "div.row._3wFoIb";
const closeButton = "button._2KpZ6l._2doB4z";
const emailInput = `${loginModal} input[type="text"]`;
const passwordInput = `${loginModal} input[type="password"]`;
const loginButtonOnModal = `${loginModal} button[type="submit"]`;
const headingOnHeader = `${header} div.go_DOp`;
const errorMessage ="span._2YULOR";
const loginModalAfterCloseButton = "div._2Sn47c"

class LoginPage {
   static getHeader(){
       return cy.get(header);   
    }
    static getLoginButtonOnHeader(){
        return cy.get(loginButtonOnHeader);
    }
    static getLoginModal(){
        return cy.get(loginModal)
    }
    static getCloseButton(){
        return cy.get(closeButton);
    }
    static getEmailInputField(){
        return cy.get(emailInput)
    }
    static getPasswordInputField(){
        return cy.get(passwordInput);
    }
    static getLoginButtonOnLoginModal(){
        return cy.get(loginButtonOnModal);
    }
    static getHeadingOnHeader(){
        return cy.get(headingOnHeader);
    }
    static getErrorMessage(){
        return cy.get(errorMessage);
    }
    static checkLoginModalVisibility(){
        return cy.get(loginModalAfterCloseButton);
    }
}

export default LoginPage;