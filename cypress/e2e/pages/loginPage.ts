/// <reference types="cypress" />


// applying page object model
class LoginPage {
  static getUsernameInput() {
    return cy.get('input[name="email"]');
  }

  static getSignInBtn() {
    return cy.get('button[type="submit"]').contains("Sign In");
  }
}

export default LoginPage;
