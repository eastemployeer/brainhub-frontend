Feature: Add event page

  Scenario: Filling form with proper data and clicking submit
    Given I go to home page
    Then I fill out form with proper data and click submit
    Then I see new segment

  Scenario: Filling form without specifing email and clicking submit
    Given I go to home page
    Then I click submit without filling form with data
    Then I see proper validation error messages

  Scenario: Filling form with invalid email and clicking submit
    Given I go to home page
    Then I fill out form with proper data and invalid email and click submit
    Then I see error message about invalid email


