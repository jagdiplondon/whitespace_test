/// <reference types="Cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import DemoPage from "../pages/bookDemoPage";

Given("I am on home page", () => {
  cy.visit(Cypress.env("baseUrl"));
});

Then("I click on Book Demo link", () => {
  DemoPage.getAcceptCookiesButton().contains("Accept All").click();
  DemoPage.getBurgerMenu().click();

  DemoPage.getBookDemoLink().click();
});

Then("I click Book Now button", () => {
  DemoPage.getBookNowBtn().click();
});

Then("I fill in the name with {string}", (name) => {
  DemoPage.getUserNameInput().type(name);
});

Then("I fill in the company name with {string}", (company) => {
  DemoPage.getCompanyInput().type(company);
});

Then("I fill in the job tile with {string}", (job) => {
  DemoPage.getJobTitleInput().type(job);
});

Then("I fill in the email with {string}", (email) => {
  DemoPage.getEmailInput().type(email);
});

Then("I fill in the phone number with {string}", (phone) => {
  DemoPage.getPhoneNumberInput().type(phone);
});

Then("I click on subscribe checkbox", () => {
  DemoPage.getCheckBox().check();
});

Then("I click on submit button", () => {
  DemoPage.getSubmitBtn().click();
});

Then("I get book confirmation message", () => {
  DemoPage.getBookConfirmationMessage().contains(
    "Thank you for requesting to book a demo."
  );
});

// cloudy Scenario
Then("I get a message {string}", (validationError) => {
  DemoPage.getFieldValidationError().contains(validationError);
});

Then("I close Book Demo Form", () => {
  DemoPage.getCloseBtn().click();
});
