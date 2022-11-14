Feature: App router

  Scenario: Redirecting to home page
    Given I go to some non existing route '/en/non-existing-link'
    Then I am redirected to home page


