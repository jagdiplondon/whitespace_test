Feature: Login Feature

  Background: Login Page
    Given I am on login page

  @sunny
  Scenario: Login with valid email address
    Then I fill in email address with 'test@gmail.com'
    Then I click on Sign In button

  @cloudy
  Scenario: Login with empty email address
    Then I fill in email address with ""
    Then Login button should be disabled