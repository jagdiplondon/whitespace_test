Feature: Book Demo Feature

  Background: Home Page
    Given I am on home page

  @sunny
  Scenario: Book Demo
    Then I click on Book Demo link
    Then I click Book Now button
    Then I fill in the name with "name"
    Then I fill in the company name with "company"
    Then I fill in the job tile with "job"
    Then I fill in the email with "email@test.com"
    Then I fill in the phone number with "522-8989-8982"
    Then I click on subscribe checkbox
    Then I click on submit button
    Then I get book confirmation message

  @cloudy
  Scenario: Invalid Book Demo
    Then I click on Book Demo link
    Then I click Book Now button
    Then I fill in the name with "name"
    Then I fill in the company name with "company"
    Then I fill in the job tile with "job"
    Then I fill in the email with "email@.com"
    Then I click on submit button
    Then I get a message "Please provide a valid value for Email address"
    Then I get a message "Please provide a value for Phone number"
    Then I close Book Demo Form

