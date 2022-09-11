const header="div#container div._1kfTjk";
const loginButtonOnHeader = `${header} a`;
const loginModal = "div.row._3wFoIb";
const closeButton = "button._2KpZ6l._2doB4z";

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
}

export default LoginPage;