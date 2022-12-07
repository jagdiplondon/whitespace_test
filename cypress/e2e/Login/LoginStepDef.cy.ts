/// <reference types="Cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/loginPage";

Given("I am on login page", () => {
  cy.visit("https://www.whitespaceplatform.com/login");
});

Then("I fill in email address with {string}", (email) => {
  if (email.length == 0) {
    LoginPage.getUsernameInput().clear();
  } else {
    LoginPage.getUsernameInput().type(email);
  }
});

Then("I click on Sign In button", () => {
  LoginPage.getSignInBtn().click();
});

Then("Login button should be disabled", () => {
  LoginPage.getSignInBtn().should("be.disabled");
});
