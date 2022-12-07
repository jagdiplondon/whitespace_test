/// <reference types="cypress" />

class DemoPage {
  static getBookDemoLink() {
    return cy.get("ul li a").contains("Book a Demo");
  }

  static getBurgerMenu() {
    return cy.xpath("/html/body/header/div/div/div[2]/button");
  }

  static getAcceptCookiesButton() {
    return cy.get(".button");
  }

  static getBookNowBtn() {
    return cy.get(":nth-child(1) > .cc-button-radical-blue");
  }

  static getUserNameInput() {
    return cy.get('form input[placeholder="Name*"]').eq(0);
  }

  static getCompanyInput() {
    return cy.get('input[placeholder="Company*"]').eq(0);
  }

  static getJobTitleInput() {
    return cy.get('input[placeholder="Job title*"]').eq(0);
  }

  static getEmailInput() {
    return cy.get('input[placeholder="Email address*"]').eq(0);
  }

  static getPhoneNumberInput() {
    return cy.get('input[placeholder="Phone number*"]').eq(0);
  }

  static getCheckBox() {
    return cy.get('input[type="checkbox"]').eq(0);
  }

  static getSubmitBtn() {
    return cy.get('input[value="Submit"]').eq(0);
  }

  static getBookConfirmationMessage() {
    return cy.get(".component p").eq(0);
  }

  static getFieldValidationError() {
    return cy.get(".field-validation-error");
  }

  static getCloseBtn() {
    return cy.get(".cc-people-modal-close").eq(0);
  }
}

export default DemoPage;
